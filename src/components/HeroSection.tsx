import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import banniereFlan from "@/assets/banniere-flan.png";
import { getFeaturedProduct } from "@/data/products";

const HeroSection = () => {
  const product = getFeaturedProduct();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "var(--gradient-hero)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texte */}
          <div className="text-center lg:text-left animate-slide-in">
            <Badge variant="outline" className="mb-6 border-primary text-primary">
              Nouveau produit
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {product.tagline.split(' ').slice(0, -1).join(' ')}
              <span className="block text-primary">{product.tagline.split(' ').slice(-1)}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {product.description} 
              <strong className="text-primary"> {product.nutritionalInfo.proteins}g de protéines</strong> par portion, 
              <strong className="text-primary"> {product.nutritionalInfo.calories} kcal</strong> seulement.
            </p>

            {/* Badges produit */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <Badge className="bg-primary text-primary-foreground">
                {product.nutritionalInfo.proteins}g de protéines
              </Badge>
              <Badge variant="secondary">
                {product.nutritionalInfo.calories} kcal
              </Badge>
              {product.nutritionalInfo.noControversialAdditives && (
                <Badge variant="outline">
                  Aucun additif controversé
                </Badge>
              )}
              {product.nutritionalInfo.madeInFrance && (
                <Badge variant="outline" className="border-accent text-accent">
                  Fabriqué en France
                </Badge>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
                onClick={() => window.location.href = '/ou-nous-trouver'}
              >
                Découvrir nos points de vente
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/produits'}
              >
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Image bannière */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img 
                src={banniereFlan} 
                alt={product.name} 
                className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
              />
              
              {/* Effet de glow doré */}
              <div 
                className="absolute inset-0 opacity-20 blur-xl"
                style={{
                  background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)"
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;