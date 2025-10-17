export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Le Sportif Gourmand",
  "url": "https://www.lesportifgourmand.com",
  "logo": "https://www.lesportifgourmand.com/logo.png",
  "description": "Pâtisseries protéinées françaises pour sportifs gourmands",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2 rue Gervex",
    "addressLocality": "Paris",
    "postalCode": "75017",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-6-28-07-99-00",
    "contactType": "customer service",
    "email": "contact@sportifgourmand.com",
    "availableLanguage": "French"
  },
  "sameAs": [
    "https://www.instagram.com/le_sportif_gourmand/",
    "https://www.linkedin.com/company/le-sportif-gourmand"
  ]
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Flan Pâtissier Protéiné",
  "description": "Flan pâtissier traditionnel enrichi en protéines. 20g de protéines pour seulement 250 calories. Fabriqué en France sans additifs controversés.",
  "brand": {
    "@type": "Brand",
    "name": "Le Sportif Gourmand"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "EUR",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "250 kcal",
    "proteinContent": "20g",
    "carbohydrateContent": "23g",
    "fatContent": "7g"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Où puis-je acheter les produits Le Sportif Gourmand ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos flans protéinés sont disponibles dans les salles de sport partenaires et magasins bio sélectionnés. Consultez notre page 'Où nous trouver' pour la liste complète des points de vente."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de protéines contient le flan ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Notre flan pâtissier protéiné contient 20g de protéines de haute qualité pour seulement 250 calories par portion."
      }
    },
    {
      "@type": "Question",
      "name": "Les produits sont-ils fabriqués en France ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, tous nos produits sont 100% fabriqués en France avec des ingrédients de qualité et sans additifs controversés."
      }
    }
  ]
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.lesportifgourmand.com${item.url}`
  }))
});
