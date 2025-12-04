export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  bannerImage?: string;
  nutritionalInfo: {
    calories: number;
    proteins: number;
    noControversialAdditives: boolean;
    madeInFrance: boolean;
  };
  detailedNutrition: {
    per100g: {
      energy: string;
      proteins: string;
      carbs: string;
      sugars: string;
      fat: string;
      saturatedFat: string;
      fiber: string;
      salt: string;
    };
  };
  ingredients: string[];
  conservation: {
    temperature: string;
    duration: string;
    packaging: string;
    format: string;
  };
  usage: string[];
}

export const products: Product[] = [
  {
    id: "flan-proteine",
    name: "Flan Pâtissier Protéiné",
    tagline: "Le Flan Pâtissier Protéiné",
    description: "La première pâtisserie qui allie plaisir gourmand et performance sportive.",
    image: "/src/assets/photo-produit-flan.png",
    bannerImage: "/src/assets/photo-flan-vitrine-du-site.png",
    nutritionalInfo: {
      calories: 250,
      proteins: 20,
      noControversialAdditives: true,
      madeInFrance: true,
    },
    detailedNutrition: {
      per100g: {
        energy: "150 kcal",
        proteins: "12.5g",
        carbs: "17.6g",
        sugars: "11g",
        fat: "3.6g",
        saturatedFat: "1.5g",
        fiber: "0g",
        salt: "0.12g",
      },
    },
    ingredients: [
      "Lait de vache français",
      "Œufs fermiers",
      "Protéines laitières",
      "Amidon de maïs",
      "Sucre roux de canne",
      "Arôme naturel de Vanille",
    ],
    conservation: {
      temperature: "Entre 0°C et 4°C",
      duration: "10 jours au frais",
      packaging: "Barquette plastique individuel recyclable",
      format: "170g par portion",
    },
    usage: [
      "Collation post-entraînement",
      "Petit-déjeuner protéiné",
      "Dessert healthy",
      "En-cas gourmand",
    ],
  },
];

export const getFeaturedProduct = () => products[0];
