// Product data types
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  brand: string;
  inStock: boolean;
  isNew: boolean;
  description: string;
}

export interface Category {
  name: string;
  value: string;
  icon: string;
}

// Products data
export const allProducts: Product[] = [
  // Smartphones
  {
    id: 1,
    name: "Purple Blue Minimalist Neon New Arrival iPhone",
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 234,
    image: "/assets/images/products/Purple Blue Minimalist Neon New Arrival Iphone.png",
    category: "Smartphones",
    brand: "Apple",
    inStock: true,
    isNew: true,
    description: "iPhone nouvelle génération avec design néon minimaliste et technologie avancée. Écran brillant avec finitions premium et performances exceptionnelles."
  },
  {
    id: 19,
    name: "Smartphone",
    price: 899,
    originalPrice: 999,
    rating: 4.7,
    reviews: 456,
    image: "/assets/images/products/Smartphone.png",
    category: "Smartphones",
    brand: "TechMobile",
    inStock: true,
    isNew: false,
    description: "Smartphone moderne avec design élégant et performances optimales. Caméra avancée, batterie longue durée et connectivité 5G pour tous vos besoins."
  },
  {
    id: 20,
    name: "Purple and Yellow Minimalist Smartphone",
    price: 799,
    originalPrice: 899,
    rating: 4.6,
    reviews: 321,
    image: "/assets/images/products/Purple and Yellow Minimalist Smartphone.png",
    category: "Smartphones",
    brand: "ColorTech",
    inStock: true,
    isNew: true,
    description: "Smartphone minimaliste avec design violet et jaune unique. Interface intuitive, performance fluide et style distinctif pour se démarquer."
  },
  {
    id: 21,
    name: "Samsung S21 Plus",
    price: 1099,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 678,
    image: "/assets/images/products/Samsung S21 Plus.png",
    category: "Smartphones",
    brand: "Samsung",
    inStock: true,
    isNew: false,
    description: "Samsung Galaxy S21 Plus avec écran Dynamic AMOLED 2X. Caméra triple 64MP, processeur Exynos puissant et design premium en métal et verre."
  },

  // Audio
  {
    id: 9,
    name: "Black and White Professional Earphone Electronics Flash",
    price: 249,
    originalPrice: 279,
    rating: 4.8,
    reviews: 567,
    image: "/assets/images/products/Black and White Professional Earphone Electronics Flash.png",
    category: "Audio",
    brand: "ProAudio",
    inStock: true,
    isNew: false,
    description: "Écouteurs professionnels élégants en noir et blanc avec technologie flash. Qualité audio studio et design moderne pour les professionnels."
  },
  {
    id: 10,
    name: "White Headphone",
    price: 329,
    originalPrice: 399,
    rating: 4.9,
    reviews: 432,
    image: "/assets/images/products/White Headphone.png",
    category: "Audio",
    brand: "AudioTech",
    inStock: true,
    isNew: true,
    description: "Casque audio blanc premium avec son haute fidélité. Design épuré et confort optimal pour une expérience d'écoute exceptionnelle."
  },
  {
    id: 11,
    name: "Purple And Lime Futuristic Headphone",
    price: 379,
    originalPrice: 429,
    rating: 4.7,
    reviews: 298,
    image: "/assets/images/products/Purple And Lime Futuristic headphone.png",
    category: "Audio",
    brand: "FutureTech",
    inStock: true,
    isNew: true,
    description: "Casque futuriste avec éclairage violet et lime. Design avant-gardiste avec technologie audio immersive et effets visuels LED."
  },
  {
    id: 12,
    name: "High-Quality Speakers & Audio Systems",
    price: 599,
    originalPrice: 699,
    rating: 4.7,
    reviews: 198,
    image: "/assets/images/products/High-Quality Speakers & Audio Systems.png",
    category: "Audio",
    brand: "Premium Audio",
    inStock: true,
    isNew: true,
    description: "Système audio haute qualité avec enceintes professionnelles. Son surround puissant et clarté exceptionnelle pour tous vos besoins audio."
  },
  {
    id: 13,
    name: "Blue and Navy Gradient Modern Minimalist Speaker",
    price: 299,
    originalPrice: 349,
    rating: 4.5,
    reviews: 124,
    image: "/assets/images/products/Blue and Navy Gradient Modern Minimalist Speaker.png",
    category: "Audio",
    brand: "ModernSound",
    inStock: true,
    isNew: false,
    description: "Enceinte Bluetooth moderne avec dégradé bleu et design minimaliste. Qualité sonore premium dans un format élégant et contemporain."
  },

  // Gaming
  {
    id: 7,
    name: "Xbox Controller",
    price: 59,
    originalPrice: 69,
    rating: 4.7,
    reviews: 432,
    image: "/assets/images/products/xbox controller .png",
    category: "Gaming",
    brand: "Microsoft",
    inStock: true,
    isNew: false,
    description: "Manette Xbox officielle avec ergonomie perfectionnée. Contrôles précis, retour haptique et connectivité sans fil pour une expérience gaming optimale."
  },
  {
    id: 8,
    name: "Purple and Pink Neon Sci-Fi Tech Mouse",
    price: 79,
    originalPrice: 99,
    rating: 4.5,
    reviews: 278,
    image: "/assets/images/products/Purple and Pink Neon Sci-Fi Tech mouse.png",
    category: "Gaming",
    brand: "TechGaming",
    inStock: true,
    isNew: true,
    description: "Souris gaming futuriste avec éclairage néon violet et rose. Design sci-fi avec capteur haute précision et ergonomie avancée pour les gamers."
  },
  {
    id: 15,
    name: "Pink Gaming Keyboard",
    price: 129,
    originalPrice: 159,
    rating: 4.6,
    reviews: 342,
    image: "/assets/images/products/Pink Gaming Keyboard.png",
    category: "Gaming",
    brand: "GamerTech",
    inStock: true,
    isNew: true,
    description: "Clavier gaming mécanique rose avec rétroéclairage RGB. Switches tactiles, design ergonomique et touches programmables pour une expérience gaming premium."
  },
  {
    id: 16,
    name: "Green Gaming Control",
    price: 89,
    originalPrice: 109,
    rating: 4.4,
    reviews: 198,
    image: "/assets/images/products/Green Gaming Control.png",
    category: "Gaming",
    brand: "GamePro",
    inStock: true,
    isNew: false,
    description: "Manette gaming verte avec contrôles avancés. Vibration HD, boutons programmables et autonomie longue durée pour tous vos jeux."
  },
  {
    id: 17,
    name: "PSP Gaming",
    price: 199,
    originalPrice: 249,
    rating: 4.8,
    reviews: 567,
    image: "/assets/images/products/PSP Gaming .png",
    category: "Gaming",
    brand: "PlayStation",
    inStock: true,
    isNew: true,
    description: "Console portable PSP avec écran haute résolution. Bibliothèque de jeux étendue et connectivité Wi-Fi pour une expérience gaming mobile."
  },
  {
    id: 18,
    name: "Modern Black & Red Gaming Mouse",
    price: 69,
    originalPrice: 89,
    rating: 4.5,
    reviews: 234,
    image: "/assets/images/products/Modern black & red gaming mouse.png",
    category: "Gaming",
    brand: "ProGamer",
    inStock: true,
    isNew: false,
    description: "Souris gaming moderne noir et rouge avec capteur optique haute précision. Design ergonomique et boutons programmables pour les compétitions."
  },

  // Smartwatches
  {
    id: 22,
    name: "Orange Gradient Modern Smart Watch",
    price: 799,
    originalPrice: 849,
    rating: 4.9,
    reviews: 234,
    image: "/assets/images/products/Orange gradient Modern Smart Watch.png",
    category: "Smartwatches",
    brand: "TechWatch",
    inStock: true,
    isNew: true,
    description: "Montre connectée moderne avec dégradé orange vibrant. Écran haute résolution, capteurs avancés et design sportif pour un style contemporain."
  },
  {
    id: 23,
    name: "Black And Gold Elegant Luxury Wristwatch",
    price: 299,
    originalPrice: 349,
    rating: 4.6,
    reviews: 187,
    image: "/assets/images/products/Black And Gold Elegant Luxury Wristwatch.png",
    category: "Smartwatches",
    brand: "LuxuryTime",
    inStock: true,
    isNew: false,
    description: "Montre élégante de luxe en noir et or. Finitions premium, bracelet raffiné et fonctionnalités connectées dans un design intemporel."
  },
  {
    id: 24,
    name: "Blue White Minimalist Elegant Classic Watch",
    price: 699,
    originalPrice: 799,
    rating: 4.8,
    reviews: 143,
    image: "/assets/images/products/Blue White Minimalist Elegant Classic Watch.png",
    category: "Smartwatches",
    brand: "ClassicTech",
    inStock: true,
    isNew: false,
    description: "Montre classique élégante en bleu et blanc. Design minimaliste raffiné avec fonctionnalités connectées et confort exceptionnel."
  },

  // Cameras
  {
    id: 25,
    name: "Black and Yellow Modern Tech Camera",
    price: 2899,
    originalPrice: 3199,
    rating: 4.9,
    reviews: 156,
    image: "/assets/images/products/Black and Yellow Modern Tech Cameras Product Features Instagram Story (1080 x 1080 px).png",
    category: "Cameras",
    brand: "TechCam",
    inStock: true,
    isNew: true,
    description: "Appareil photo moderne haute technologie en noir et jaune. Capteur professionnel, autofocus intelligent et design contemporain pour la photographie avancée."
  },
  {
    id: 26,
    name: "Professional Drone",
    price: 1299,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 156,
    image: "/assets/images/products/drone.png",
    category: "Cameras",
    brand: "DroneTech",
    inStock: true,
    isNew: true,
    description: "Drone professionnel avec caméra 4K ultra-haute définition. Stabilisation gimbal 3 axes, vol autonome et transmission vidéo en temps réel."
  },

  // Accessories
  {
    id: 27,
    name: "Computer Printer",
    price: 299,
    originalPrice: 349,
    rating: 4.4,
    reviews: 198,
    image: "/assets/images/products/Computer Printer .png",
    category: "Accessories",
    brand: "PrintTech",
    inStock: true,
    isNew: false,
    description: "Imprimante multifonction professionnelle. Impression, scan et copie haute qualité avec connectivité réseau et fonctionnalités avancées."
  }
];

// Categories data
export const categories: Category[] = [
  { name: "Tous", value: "all", icon: "🛍️" },
  { name: "Smartphones", value: "Smartphones", icon: "📱" },
  { name: "Audio", value: "Audio", icon: "🎧" },
  { name: "Gaming", value: "Gaming", icon: "🎮" },
  { name: "Smartwatches", value: "Smartwatches", icon: "⌚" },
  { name: "Cameras", value: "Cameras", icon: "📷" },
  { name: "Accessories", value: "Accessories", icon: "🖨️" },
];

// Brands data
export const brands: string[] = [
  "Apple", 
  "Samsung",
  "TechMobile",
  "ColorTech",
  "ProAudio",
  "AudioTech",
  "FutureTech",
  "Premium Audio",
  "ModernSound",
  "Microsoft", 
  "TechGaming",
  "GamerTech",
  "GamePro",
  "PlayStation",
  "ProGamer",
  "TechWatch",
  "LuxuryTime",
  "ClassicTech",
  "TechCam",
  "DroneTech",
  "PrintTech"
];

// Utility functions
export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return allProducts;
  return allProducts.filter(product => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.isNew || product.rating >= 4.8).slice(0, 8);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return allProducts.filter(product => product.brand === brand);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};
