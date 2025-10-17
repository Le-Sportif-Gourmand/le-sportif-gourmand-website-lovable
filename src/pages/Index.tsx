import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnerCarousel from "@/components/PartnerCarousel";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { organizationSchema, faqSchema } from "@/lib/structuredData";

const Index = () => {
  const multipleSchemas = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, faqSchema]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Le Sportif Gourmand - Flan Pâtissier Protéiné Français"
        description="Découvrez notre flan pâtissier protéiné français. 20g de protéines, 250 kcal, sans additifs controversés. La révolution de la pâtisserie sportive gourmande."
        keywords="flan protéiné, pâtisserie sportive, nutrition sport, dessert protéiné, fait en France, collation protéinée"
        canonical="/"
        structuredData={multipleSchemas}
      />
      <Header />
      <main>
        <HeroSection />
        <PartnerCarousel />
        <GoogleReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
