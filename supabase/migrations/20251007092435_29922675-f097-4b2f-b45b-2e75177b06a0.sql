-- Create table for storing Google reviews
CREATE TABLE public.google_reviews (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  google_review_id text UNIQUE NOT NULL,
  author_name text NOT NULL,
  author_photo_url text,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text text NOT NULL,
  relative_time_description text NOT NULL,
  time timestamp with time zone NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.google_reviews ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access to reviews"
ON public.google_reviews
FOR SELECT
USING (true);

-- Create index for faster queries
CREATE INDEX idx_google_reviews_time ON public.google_reviews(time DESC);
CREATE INDEX idx_google_reviews_rating ON public.google_reviews(rating);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_google_reviews_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_google_reviews_updated_at
BEFORE UPDATE ON public.google_reviews
FOR EACH ROW
EXECUTE FUNCTION public.update_google_reviews_updated_at();