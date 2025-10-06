import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import adamPhoto from "@/assets/adam-bouhrara.jpg";
import gaspardPhoto from "@/assets/gaspard-moulin.jpeg";

const Histoire = () => {
  const timeline = [
    {
      year: "2024",
      title: "La Naissance de l'Idée",
      description: "Après des années de frustration à chercher des collations à la fois gourmandes et adaptées à une pratique sportive intensive, l'idée du Sportif Gourmand naît de la passion pour la pâtisserie française et la nutrition sportive."
    },
    {
      year: "2024",
      title: "Développement et Recherche",
      description: "En partenariat avec le CTCPA, nous développons notre première recette de flan protéiné. Des mois de tests pour atteindre l'équilibre parfait entre goût authentique et apport nutritionnel optimal."
    },
    {
      year: "2025",
      title: "Reconnaissance et Soutien",
      description: "Le Sportif Gourmand intègre le réseau Pépite France et obtient le soutien de BPI France, confirmant le potentiel innovant de notre concept."
    },
    {
      year: "2025",
      title: "Lancement Commercial",
      description: "Lancement de notre flan pâtissier protéiné sur le marché français. Une révolution dans l'univers de la pâtisserie santé commence."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre <span className="text-primary">Histoire</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              L'aventure du Sportif Gourmand commence par une simple observation : 
              pourquoi faut-il choisir entre plaisir gourmand et performance sportive ?
            </p>
          </div>

          {/* Fondateurs */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Fondateurs</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Le Sportif Gourmand est né de la rencontre entre deux passionnés : 
              l'un expert en nutrition sportive, l'autre amateur de pâtisserie française. 
              Ensemble, nous avons créé une nouvelle catégorie de produits qui réconcilie 
              plaisir gourmand et performance sportive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="mb-6 relative">
                  <img 
                    src={adamPhoto} 
                    alt="Adam Bouhrara - Co-fondateur" 
                    className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-primary/20"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Adam Bouhrara</h3>
                <p className="text-primary font-medium mb-3">Co-fondateur</p>
                <p className="text-muted-foreground text-sm">
                  Passionné de nutrition sportive et d'innovation, Adam a imaginé 
                  une nouvelle façon de concilier performance et gourmandise.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-6 relative">
                  <img 
                    src={gaspardPhoto} 
                    alt="Gaspard Moulin - Co-fondateur" 
                    className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-primary/20"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Gaspard Moulin</h3>
                <p className="text-primary font-medium mb-3">Co-fondateur</p>
                <p className="text-muted-foreground text-sm">
                  Amoureux de la pâtisserie française, Gaspard apporte son expertise 
                  pour créer des produits aussi délicieux que nutritifs.
                </p>
              </div>
            </div>
          </div>

          {/* Vision et Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-center">Notre Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Révolutionner l'univers de la pâtisserie en créant des desserts qui nourrissent 
                  autant le corps que l'âme. Nous imaginons un monde où chaque bouchée de dessert 
                  contribue à vos objectifs de performance et de bien-être.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-center">Notre Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Allier l'art pâtissier français traditionnel aux besoins nutritionnels modernes. 
                  Chaque produit est conçu pour offrir une expérience gustative exceptionnelle 
                  tout en soutenant vos objectifs sportifs et nutritionnels.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Notre Parcours</h2>
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {event.year}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Valeurs */}
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🥐</div>
                <h3 className="text-xl font-semibold mb-3">Tradition Française</h3>
                <p className="text-muted-foreground">
                  Nous respectons et perpétuons l'excellence de la pâtisserie française, 
                  en utilisant des techniques artisanales et des ingrédients de qualité.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl font-semibold mb-3">Performance</h3>
                <p className="text-muted-foreground">
                  Chaque produit est formulé pour soutenir vos objectifs sportifs et 
                  nutritionnels, sans jamais compromettre le plaisir gustatif.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-3">Naturalité</h3>
                <p className="text-muted-foreground">
                  Nous privilégions les ingrédients naturels et refusons les additifs 
                  controversés pour des produits sains et authentiques.
                </p>
              </div>
            </div>
          </div>

          {/* Citation inspirante */}
          <div className="text-center mt-16">
            <blockquote className="text-2xl md:text-3xl font-bold text-primary italic max-w-4xl mx-auto">
              "La pâtisserie, c'est de la science appliquée avec passion. 
              Nous appliquons cette science au service de votre performance."
            </blockquote>
            <p className="text-muted-foreground mt-4">— L'équipe du Sportif Gourmand</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Histoire;