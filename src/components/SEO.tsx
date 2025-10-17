import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Le Sportif Gourmand - Pâtisseries Protéinées",
  description = "Découvrez nos flan pâtissiers protéinés. 20g de protéines, 250 kcal, fabriqués en France. La révolution de la pâtisserie sportive gourmande.",
  keywords = "flan protéiné, pâtisserie sportive, nutrition sport, dessert protéiné, fait en France",
  canonical,
  ogImage = "https://www.lesportifgourmand.com/og-image.jpg",
  ogType = "website",
  structuredData,
}: SEOProps) => {
  const siteUrl = "https://www.lesportifgourmand.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Le Sportif Gourmand" />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Le Sportif Gourmand" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sportifgourmand" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
