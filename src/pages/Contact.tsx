import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nous <span className="text-primary">Contacter</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une question, une suggestion ou une demande de partenariat ? 
              Notre équipe est là pour vous accompagner dans votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Prénom</label>
                      <Input placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom</label>
                      <Input placeholder="Votre nom" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="votre.email@exemple.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone (optionnel)</label>
                    <Input type="tel" placeholder="+33 1 23 45 67 89" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Sujet</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Question produit</option>
                      <option>Demande de partenariat</option>
                      <option>Suggestion point de vente</option>
                      <option>Service client</option>
                      <option>Presse / Médias</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Décrivez votre demande..."
                      className="min-h-32"
                    />
                  </div>

                  <Button className="w-full">
                    Envoyer le message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Informations de contact */}
            <div className="space-y-6">
              
              {/* Coordonnées */}
              <Card>
                <CardHeader>
                  <CardTitle>Nos Coordonnées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-sm text-muted-foreground">
                        123 Rue de la Pâtisserie<br />
                        75001 Paris, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-sm text-muted-foreground">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">contact@lesportifgourmand.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Horaires</p>
                      <p className="text-sm text-muted-foreground">
                        Lun-Ven: 9h-18h<br />
                        Sam: 9h-12h<br />
                        Dim: Fermé
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Équipes spécialisées */}
              <Card>
                <CardHeader>
                  <CardTitle>Équipes Spécialisées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-sm">Service Commercial</p>
                    <p className="text-xs text-muted-foreground">commercial@lesportifgourmand.fr</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Partenariats</p>
                    <p className="text-xs text-muted-foreground">partenaires@lesportifgourmand.fr</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Presse & Communication</p>
                    <p className="text-xs text-muted-foreground">presse@lesportifgourmand.fr</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Service Client</p>
                    <p className="text-xs text-muted-foreground">support@lesportifgourmand.fr</p>
                  </div>
                </CardContent>
              </Card>

              {/* Réseaux sociaux */}
              <Card>
                <CardHeader>
                  <CardTitle>Suivez-nous</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* FAQ rapide */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Questions Fréquentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Où puis-je acheter vos produits ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Nos flans sont disponibles dans les salles de sport partenaires et magasins bio. 
                    Consultez notre page "Où nous trouver" pour la liste complète.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Livrez-vous à domicile ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Actuellement, nous ne proposons pas de livraison à domicile. 
                    Faites-nous savoir si cela vous intéresse !
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Comment devenir partenaire ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Envoyez-nous votre demande via le formulaire en sélectionnant 
                    "Demande de partenariat". Notre équipe commerciale vous recontactera.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Délai de réponse ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Nous répondons généralement sous 24-48h ouvrées. 
                    Pour les urgences, appelez-nous directement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;