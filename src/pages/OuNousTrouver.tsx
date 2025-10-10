import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface SalesPoint {
  id: string;
  name: string;
  address: string;
  phone: string | null;
  hours: string | null;
  type: string;
  latitude: number;
  longitude: number;
  created_at: string;
}

const OuNousTrouver = () => {
  const [salesPoints, setSalesPoints] = useState<SalesPoint[]>([]);
  const [latestSalesPoints, setLatestSalesPoints] = useState<SalesPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchSalesPoints = async () => {
      try {
        // Fetch all sales points
        const { data: allPoints, error: allError } = await supabase
          .from("sales_points")
          .select("*")
          .order("created_at", { ascending: false });

        if (allError) throw allError;

        // Fetch latest 4 sales points
        const { data: latestPoints, error: latestError } = await supabase
          .from("sales_points")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(4);

        if (latestError) throw latestError;

        setSalesPoints(allPoints || []);
        setLatestSalesPoints(latestPoints || []);
      } catch (error) {
        console.error("Error fetching sales points:", error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les points de vente",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchSalesPoints();
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Où nous <span className="text-primary">Trouver</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez tous les points de vente où vous pouvez vous procurer nos flan pâtissiers protéinés. 
              Disponibles dans les salles de sport partenaires et magasins bio sélectionnés.
            </p>
          </div>

          {/* Carte interactive */}
          {!isLoading && salesPoints.length > 0 && (
            <Card className="mb-8">
              <CardContent className="p-0">
                <div className="h-96 rounded-lg overflow-hidden">
                  <MapContainer
                    center={[48.8566, 2.3522]}
                    zoom={12}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {salesPoints.map((point) => (
                      <Marker
                        key={point.id}
                        position={[Number(point.latitude), Number(point.longitude)]}
                      >
                        <Popup>
                          <div className="text-sm">
                            <p className="font-semibold">{point.name}</p>
                            <p className="text-xs text-muted-foreground">{point.type}</p>
                            <p className="text-xs mt-1">{point.address}</p>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Les 4 derniers points de vente ajoutés */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              Nos <span className="text-primary">Derniers Points de Vente</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Découvrez les 4 dernières salles et magasins qui vendent nos produits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {isLoading ? (
              <div className="col-span-2 text-center py-8">
                <p className="text-muted-foreground">Chargement des points de vente...</p>
              </div>
            ) : (
              latestSalesPoints.map((point) => (
              <Card key={point.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-1">{point.name}</CardTitle>
                      <span className="text-sm text-primary font-medium">{point.type}</span>
                    </div>
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{point.address}</span>
                  </div>
                  {point.hours && (
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">{point.hours}</span>
                    </div>
                  )}
                  {point.phone && (
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">{point.phone}</span>
                    </div>
                  )}
                  <div className="pt-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(point.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-sm"
                    >
                      <span>Voir sur Google Maps</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
              ))
            )}
          </div>

          {/* Informations supplémentaires */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Vous êtes un professionnel ?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Vous souhaitez référencer nos produits dans votre établissement ? 
                  Contactez notre équipe commerciale pour découvrir nos conditions de partenariat.
                </p>
                <a href="/contact">
                  <Button variant="outline">
                    Devenir partenaire
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Livraison</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  La livraison à domicile n'est pas encore disponible. 
                  Contactez-nous pour nous faire part de votre intérêt !
                </p>
                <a href="/contact">
                  <Button variant="outline">
                    Manifester votre intérêt
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas de point de vente près de chez vous ?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Faites-nous savoir où vous aimeriez trouver nos produits ! 
              Nous travaillons constamment à l'expansion de notre réseau de distribution.
            </p>
            <a href="/contact">
              <Button variant="default" size="lg">Suggérer un point de vente</Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OuNousTrouver;