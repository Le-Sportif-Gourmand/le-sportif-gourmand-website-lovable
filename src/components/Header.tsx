import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoGauche from "@/assets/logo-gauche.png";
import logoDroite from "@/assets/logo-droite.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Produits", href: "/produits" },
    { name: "Partenaires", href: "/partenaires" },
    { name: "Histoire", href: "/histoire" },
    { name: "Où nous trouver", href: "/ou-nous-trouver" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo gauche */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logoGauche} 
                alt="Le Sportif Gourmand Logo" 
                className="h-12"
                style={{
                  mixBlendMode: 'screen',
                  filter: 'brightness(1.2)'
                }}
              />
            </Link>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Logo droite */}
          <div className="hidden md:flex items-center">
            <img 
              src={logoDroite} 
              alt="Le Sportif Gourmand" 
              className="h-16 w-16"
              style={{
                mixBlendMode: 'screen',
                filter: 'brightness(1.2)'
              }}
            />
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-10 w-10 p-0"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t bg-background">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <img 
                  src={logoDroite} 
                  alt="Le Sportif Gourmand" 
                  className="h-8 mx-3"
                  style={{
                    mixBlendMode: 'screen',
                    filter: 'brightness(1.2)'
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
