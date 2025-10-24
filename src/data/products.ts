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
    image: "/src/assets/flan-product.png",
    bannerImage: "/src/assets/banniere-flan.png",
    nutritionalInfo: {
      calories: 250,
      proteins: 20,
      noControversialAdditives: true,
      madeInFrance: true,
    },
    detailedNutrition: {
      per100g: {
        energy: "274 kcal",
        proteins: "25g",
        carbs: "34g",
        sugars: "20g",
        fat: "4.1g",
        saturatedFat: "1.2g",
        fiber: "0g",
        salt: "0.32g",
      },
    },
    ingredients: [
      "Lait de vache français",
      "Œufs fermiers",
      "Protéines de lait",
      "Amidon de maïs",
      "Sucre roux de canne",
      "Arôme naturel de Vanille",
    ],
    conservation: {
      temperature: "Entre 2°C et 4°C",
      duration: "6 jours au frais",
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
