import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import flanProduct from "@/assets/flan-product.png";
import madeInFrance from "@/assets/made-in-france.png";
import { products } from "@/data/products";

const Produits = () => {
  const product = products[0]; // Premier produit

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-primary">Produits</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre gamme de pâtisseries protéinées, conçues pour allier plaisir gourmand et performance sportive.
            </p>
          </div>

          {/* Produit principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Produit phare
              </Badge>
              <h2 className="text-3xl font-bold mb-6">{product.name}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Notre flan pâtissier révolutionnaire combine la tradition française de la pâtisserie 
                avec les besoins nutritionnels des sportifs modernes. Chaque portion contient {product.nutritionalInfo.proteins}g de 
                protéines de haute qualité pour seulement {product.nutritionalInfo.calories} calories.
              </p>

              {/* Caractéristiques nutritionnelles */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{product.nutritionalInfo.proteins}g</div>
                    <div className="text-sm text-muted-foreground">Protéines</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{product.nutritionalInfo.calories}</div>
                    <div className="text-sm text-muted-foreground">Calories</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">0</div>
                    <div className="text-sm text-muted-foreground">Additifs controversés</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Français</div>
                  </CardContent>
                </Card>
              </div>

              {/* Labels */}
              <div className="flex items-center space-x-4">
                <img src={madeInFrance} alt="Fabriqué en France" className="h-12" />
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative bg-card/30 backdrop-blur-sm p-12 rounded-3xl border border-primary/20">
                <img 
                  src={flanProduct} 
                  alt={product.name} 
                  className="object-contain drop-shadow-2xl animate-float"
                />
                <div 
                  className="absolute inset-0 rounded-3xl opacity-20 blur-xl"
                  style={{
                    background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Informations détaillées */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Valeurs nutritionnelles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-2">
                  <p className="text-xs text-muted-foreground mb-3">Pour 100g</p>
                  <div className="flex justify-between border-b pb-2">
                    <span>Énergie</span>
                    <span className="font-semibold">{product.detailedNutrition.per100g.energy}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Protéines</span>
                    <span className="font-semibold text-primary">{product.detailedNutrition.per100g.proteins}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Glucides</span>
                    <span className="font-semibold">{product.detailedNutrition.per100g.carbs}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 pl-4">
                    <span className="text-xs">dont sucres</span>
                    <span className="text-xs">{product.detailedNutrition.per100g.sugars}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Lipides</span>
                    <span className="font-semibold">{product.detailedNutrition.per100g.fat}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 pl-4">
                    <span className="text-xs">dont saturés</span>
                    <span className="text-xs">{product.detailedNutrition.per100g.saturatedFat}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Fibres</span>
                    <span className="font-semibold">{product.detailedNutrition.per100g.fiber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sel</span>
                    <span className="font-semibold">{product.detailedNutrition.per100g.salt}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Ingrédients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>• {ingredient}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Conservation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p><strong>Température :</strong> {product.conservation.temperature}</p>
                <p><strong>Durée :</strong> {product.conservation.duration}</p>
                <p><strong>Conditionnement :</strong> {product.conservation.packaging}</p>
                <p><strong>Format :</strong> {product.conservation.format}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Utilisation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p><strong>Idéal pour :</strong></p>
                <ul className="space-y-1 mt-2">
                  {product.usage.map((use, index) => (
                    <li key={index}>• {use}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Produits;