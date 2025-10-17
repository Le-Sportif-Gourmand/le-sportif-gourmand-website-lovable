import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import partnerCtcpa from "@/assets/partner-ctcpa.png";
import partnerBpi from "@/assets/partner-bpi.png";
import partnerPepite from "@/assets/partner-pepite.png";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/lib/structuredData";

const Partenaires = () => {
  const navigate = useNavigate();

  const breadcrumb = breadcrumbSchema([
    { name: "Accueil", url: "/" },
    { name: "Partenaires", url: "/partenaires" }
  ]);

  const partners = [
    {
      name: "CTCPA",
      logo: partnerCtcpa,
      role: "Centre Technique",
      description: "Le CTCPA nous accompagne dans le développement de nos recettes et la validation de nos processus de production. Leur expertise technique garantit la qualité et la sécurité de nos produits.",
      website: "https://www.ctcpa.org"
    },
    {
      name: "BPI France",
      logo: partnerBpi,
      role: "Soutien Financier",
      description: "BPI France nous accompagne dans notre développement avec des solutions de financement adaptées aux entreprises innovantes. Leur soutien nous permet d'accélérer notre croissance.",
      website: "https://www.bpifrance.fr"
    },
    {
      name: "Pépite France",
      logo: partnerPepite,
      role: "Incubateur",
      description: "Le réseau Pépite nous accompagne depuis nos débuts dans l'entrepreneuriat étudiant et continue de nous soutenir dans notre développement commercial et stratégique.",
      website: "https://www.pepite-france.fr"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Nos Partenaires - CTCPA, BPI France, Pépite | Le Sportif Gourmand"
        description="Le Sportif Gourmand s'entoure d'experts reconnus : CTCPA pour le développement, BPI France pour le financement, Pépite pour l'accompagnement entrepreneurial."
        keywords="partenaires Le Sportif Gourmand, CTCPA, BPI France, Pépite France, innovation alimentaire, startup food"
        canonical="/partenaires"
        structuredData={breadcrumb}
      />
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-primary">Partenaires</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Le Sportif Gourmand s'entoure d'experts reconnus pour développer des produits d'excellence 
              et accélérer son développement sur le marché français.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-24 w-auto object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl mb-2">{partner.name}</CardTitle>
                  <div className="text-primary font-medium text-sm">{partner.role}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  <a 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    En savoir plus →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Section engagement */}
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Notre Engagement Partenarial</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                  <p className="text-muted-foreground">
                    Nous travaillons main dans la main avec nos partenaires pour créer 
                    des synergies et développer des solutions innovantes.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Chaque partenariat vise l'excellence et contribue à améliorer 
                    la qualité de nos produits et services.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Ensemble, nous repoussons les limites de la pâtisserie traditionnelle 
                    pour créer l'avenir de l'alimentation sportive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact partenariats */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Devenir Partenaire</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vous êtes intéressé par un partenariat avec Le Sportif Gourmand ? 
              Contactez-nous pour discuter des opportunités de collaboration.
            </p>
              <Button variant="default" size="lg" onClick={() => navigate('/contact')}>Nous contacter</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partenaires;