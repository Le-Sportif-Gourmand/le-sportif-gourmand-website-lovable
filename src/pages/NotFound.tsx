import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(`Erreur 404 : L'utilisateur a tenté d'accéder à la route inexistante : ${location.pathname}`);
  }, [location.pathname]);

  return (
    <>
      {/* Étape 1 : Dire aux robots de ne pas indexer cette page */}
      <SEO
        title="404 - Page Non Trouvée | Le Sportif Gourmand"
        description="Oups ! La page que vous cherchez semble s'être perdue. Retournez à l'accueil pour découvrir nos pâtisseries protéinées."
        noindex={true} // C'est la prop la plus importante ici !
      />

      <div className="flex min-h-screen flex-col">
        <Header />
        
        {/* Étape 2 : Améliorer l'expérience pour l'utilisateur perdu */}
        <main className="flex flex-grow items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
            <p className="mb-2 text-2xl font-semibold text-gray-700">Oups ! Cette page s'est fait les tablettes de chocolat.</p>
            <p className="mb-8 text-lg text-gray-500">
              La page que vous demandez n'existe pas ou a été déplacée.
            </p>
            
            {/* Étape 3 : Donner des options utiles à l'utilisateur */}
            <div className="space-x-4">
              <Link
                to="/"
                className="inline-block rounded-md bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105"
              >
                Retour à l'accueil
              </Link>
              <Link
                to="/produits"
                className="inline-block rounded-md border border-gray-300 px-6 py-3 text-lg font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-100"
              >
                Voir nos produits
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;