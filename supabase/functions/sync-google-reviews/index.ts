import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GOOGLE_PLACES_API_KEY = Deno.env.get('GOOGLE_PLACES_API_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    if (!GOOGLE_PLACES_API_KEY) {
      throw new Error('GOOGLE_PLACES_API_KEY not configured');
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Search for "Le Sportif Gourmand" place
    const searchResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Le+Sportif+Gourmand&inputtype=textquery&fields=place_id&key=${GOOGLE_PLACES_API_KEY}`
    );
    
    if (!searchResponse.ok) {
      throw new Error('Failed to search for place');
    }

    const searchData = await searchResponse.json();
    console.log('Search results:', searchData);

    if (!searchData.candidates || searchData.candidates.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Place not found', message: 'Le Sportif Gourmand was not found on Google Places' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const placeId = searchData.candidates[0].place_id;
    console.log('Found place_id:', placeId);

    // Get place details including reviews
    const detailsResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    );

    if (!detailsResponse.ok) {
      throw new Error('Failed to fetch place details');
    }

    const detailsData = await detailsResponse.json();
    console.log('Place details:', detailsData);

    if (!detailsData.result || !detailsData.result.reviews) {
      return new Response(
        JSON.stringify({ error: 'No reviews found', message: 'No reviews available for this place' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const reviews = detailsData.result.reviews;
    let insertedCount = 0;
    let skippedCount = 0;

    // Insert or update reviews
    for (const review of reviews) {
      const reviewData = {
        google_review_id: review.time.toString(), // Using timestamp as unique ID
        author_name: review.author_name,
        author_photo_url: review.profile_photo_url || null,
        rating: review.rating,
        text: review.text,
        relative_time_description: review.relative_time_description,
        time: new Date(review.time * 1000).toISOString(),
      };

      const { error } = await supabase
        .from('google_reviews')
        .upsert(reviewData, { onConflict: 'google_review_id' });

      if (error) {
        console.error('Error inserting review:', error);
        skippedCount++;
      } else {
        insertedCount++;
      }
    }

    console.log(`Synced ${insertedCount} reviews, skipped ${skippedCount}`);

    return new Response(
      JSON.stringify({
        success: true,
        total_reviews: detailsData.result.user_ratings_total,
        average_rating: detailsData.result.rating,
        synced: insertedCount,
        skipped: skippedCount,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error syncing reviews:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
