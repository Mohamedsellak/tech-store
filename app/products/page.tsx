"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiStar, FiHeart, FiEye, FiSearch, FiFilter, FiX } from "react-icons/fi";
import { AiOutlineLaptop, AiOutlineTablet, AiOutlineMobile } from "react-icons/ai";
import { BsHeadphones, BsSmartwatch, BsController, BsCamera } from "react-icons/bs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

// All products data
const allProducts = [
  // Smartphones
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 234,
    image: "📱",
    category: "Smartphones",
    brand: "Apple",
    inStock: true,
    isNew: true,
    description: "Le smartphone le plus avancé avec le chip A17 Pro et un design en titane."
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 1099,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 189,
    image: "📱",
    category: "Smartphones",
    brand: "Samsung",
    inStock: true,
    isNew: false,
    description: "Smartphone premium avec S Pen intégré et caméra de 200MP."
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    price: 899,
    originalPrice: 999,
    rating: 4.7,
    reviews: 156,
    image: "📱",
    category: "Smartphones",
    brand: "Google",
    inStock: false,
    isNew: false,
    description: "L'IA de Google dans un smartphone avec des photos extraordinaires."
  },
  // Laptops
  {
    id: 4,
    name: "MacBook Pro 16\" M3 Max",
    price: 2499,
    originalPrice: 2699,
    rating: 4.9,
    reviews: 127,
    image: "💻",
    category: "Laptops",
    brand: "Apple",
    inStock: true,
    isNew: true,
    description: "Le laptop le plus puissant pour les professionnels créatifs."
  },
  {
    id: 5,
    name: "Dell XPS 15",
    price: 1899,
    originalPrice: 2099,
    rating: 4.6,
    reviews: 98,
    image: "💻",
    category: "Laptops",
    brand: "Dell",
    inStock: true,
    isNew: false,
    description: "Ultrabook premium avec écran OLED 4K et performances exceptionnelles."
  },
  {
    id: 6,
    name: "ThinkPad X1 Carbon",
    price: 1599,
    originalPrice: 1799,
    rating: 4.7,
    reviews: 143,
    image: "💻",
    category: "Laptops",
    brand: "Lenovo",
    inStock: true,
    isNew: false,
    description: "Laptop business ultra-léger avec sécurité enterprise."
  },
  // Audio
  {
    id: 7,
    name: "AirPods Pro 2",
    price: 249,
    originalPrice: 279,
    rating: 4.8,
    reviews: 567,
    image: "🎧",
    category: "Audio",
    brand: "Apple",
    inStock: true,
    isNew: false,
    description: "Écouteurs sans fil avec réduction de bruit active révolutionnaire."
  },
  {
    id: 8,
    name: "Sony WH-1000XM5",
    price: 329,
    originalPrice: 399,
    rating: 4.9,
    reviews: 432,
    image: "🎧",
    category: "Audio",
    brand: "Sony",
    inStock: true,
    isNew: true,
    description: "Casque premium avec la meilleure réduction de bruit du marché."
  },
  // Tablets
  {
    id: 9,
    name: "iPad Pro 12.9\" M2",
    price: 1099,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 201,
    image: "📱",
    category: "Tablets",
    brand: "Apple",
    inStock: true,
    isNew: false,
    description: "Tablette professionnelle avec chip M2 et écran Liquid Retina XDR."
  },
  {
    id: 10,
    name: "Samsung Galaxy Tab S9 Ultra",
    price: 999,
    originalPrice: 1099,
    rating: 4.6,
    reviews: 134,
    image: "📱",
    category: "Tablets",
    brand: "Samsung",
    inStock: true,
    isNew: true,
    description: "Grande tablette Android avec S Pen et écran AMOLED 14.6\"."
  },
  // Gaming
  {
    id: 11,
    name: "PlayStation 5",
    price: 499,
    originalPrice: 549,
    rating: 4.8,
    reviews: 892,
    image: "🎮",
    category: "Gaming",
    brand: "Sony",
    inStock: false,
    isNew: false,
    description: "Console de jeu nouvelle génération avec SSD ultra-rapide."
  },
  {
    id: 12,
    name: "Xbox Series X",
    price: 499,
    originalPrice: 549,
    rating: 4.7,
    reviews: 743,
    image: "🎮",
    category: "Gaming",
    brand: "Microsoft",
    inStock: true,
    isNew: false,
    description: "Console 4K la plus puissante avec Quick Resume."
  }
];

const categories = [
  { name: "Tous", value: "all", icon: "🛍️" },
  { name: "Smartphones", value: "Smartphones", icon: "📱" },
  { name: "Laptops", value: "Laptops", icon: "💻" },
  { name: "Tablets", value: "Tablets", icon: "📱" },
  { name: "Audio", value: "Audio", icon: "🎧" },
  { name: "Gaming", value: "Gaming", icon: "🎮" },
];

const brands = ["Apple", "Samsung", "Google", "Dell", "Lenovo", "Sony", "Microsoft"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [sortBy, setSortBy] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.isNew ? 1 : -1;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.03)_60deg,transparent_120deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.02)_60deg,transparent_120deg)]"></div>
      
      <div className="container mx-auto px-6 py-12 pt-28">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Enhanced Sidebar Filters */}
          <aside className={`xl:w-96 ${showFilters ? 'block' : 'hidden xl:block'}`}>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 p-8 sticky top-32 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Filtres</h2>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="xl:hidden hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl"
                  onClick={() => setShowFilters(false)}
                >
                  <FiX className="w-5 h-5" />
                </Button>
              </div>

              {/* Enhanced Search */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Recherche Intelligente
                </label>
                <div className="relative group">
                  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors z-10" />
                  <Input
                    placeholder="Rechercher des produits..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 bg-gray-50 dark:bg-gray-900/50 border-0 rounded-2xl focus:bg-white dark:focus:bg-gray-800 transition-all duration-300 shadow-inner"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </div>

              <Separator className="my-8 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />

              {/* Enhanced Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Catégories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.value}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`w-full group relative overflow-hidden flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
                        selectedCategory === category.value
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25 scale-105'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:scale-102 bg-gray-50/50 dark:bg-gray-900/30'
                      }`}
                    >
                      <div className={`text-2xl transition-transform duration-300 ${selectedCategory === category.value ? 'scale-110' : 'group-hover:scale-110'}`}>
                        {category.icon}
                      </div>
                      <span className="font-semibold">{category.name}</span>
                      {selectedCategory === category.value && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50"></div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              <Separator className="my-8 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />

              {/* Enhanced Brands */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Marques Premium
                </h3>
                <div className="space-y-4">
                  {brands.map((brand, index) => (
                    <motion.div
                      key={brand}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center space-x-3 group"
                    >
                      <Checkbox
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                        className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-purple-600 border-2 rounded-lg"
                      />
                      <label
                        htmlFor={brand}
                        className="text-sm font-medium cursor-pointer group-hover:text-blue-600 transition-colors flex-1 py-2"
                      >
                        {brand}
                      </label>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Separator className="my-8 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />

              {/* Enhanced Price Range */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Gamme de Prix
                </h3>
                <div className="px-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={3000}
                    min={0}
                    step={50}
                    className="mb-6"
                  />
                  <div className="flex justify-between">
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{priceRange[0]}€</span>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{priceRange[1]}€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Enhanced Main Content */}
          <main className="flex-1">
            {/* Enhanced Top Bar */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                    Collection Premium
                  </h1>
                  <div className="flex items-center space-x-4">
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''} d'exception
                    </p>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FiStar key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">4.8 moyenne</span>
                    </div>
                  </div>
                </motion.div>
                
                <div className="flex items-center space-x-4 mt-6 lg:mt-0">
                  <Button
                    variant="outline"
                    className="xl:hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 rounded-2xl px-6 py-3"
                    onClick={() => setShowFilters(true)}
                  >
                    <FiFilter className="w-4 h-4 mr-2" />
                    Filtres Avancés
                  </Button>
                  
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-52 h-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 rounded-2xl">
                      <SelectValue placeholder="Trier par" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-gray-200 dark:border-gray-700 rounded-2xl">
                      <SelectItem value="name">Nom A-Z</SelectItem>
                      <SelectItem value="price-low">Prix croissant</SelectItem>
                      <SelectItem value="price-high">Prix décroissant</SelectItem>
                      <SelectItem value="rating">Mieux notés</SelectItem>
                      <SelectItem value="newest">Plus récents</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Enhanced Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-xl shadow-gray-900/10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl">
                    <CardHeader className="p-0 relative">
                      <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center overflow-hidden rounded-t-3xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20"></div>
                        
                        <motion.div 
                          className="text-7xl relative z-10"
                          whileHover={{ scale: 1.1, rotateY: 15 }}
                          transition={{ duration: 0.3 }}
                        >
                          {product.image}
                        </motion.div>
                        
                        {/* Floating Badges */}
                        <div className="absolute top-4 right-4 flex flex-col space-y-2">
                          {product.isNew && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25">
                                Nouveau
                              </Badge>
                            </motion.div>
                          )}
                          {!product.inStock && (
                            <Badge variant="destructive" className="shadow-lg shadow-red-500/25">
                              Rupture
                            </Badge>
                          )}
                          {product.originalPrice > product.price && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25">
                                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                        
                        {/* Wishlist Button */}
                        <motion.div
                          className="absolute top-4 left-4"
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            size="icon"
                            variant="secondary"
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 rounded-2xl shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <FiHeart className="w-4 h-4" />
                          </Button>
                        </motion.div>

                        {/* Quick View Button */}
                        <motion.div
                          className="absolute bottom-4 right-4"
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            size="icon"
                            variant="secondary"
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 rounded-2xl shadow-lg"
                          >
                            <FiEye className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                          {product.category}
                        </Badge>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                              {product.rating}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">({product.reviews})</span>
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {product.name}
                      </CardTitle>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {product.price}€
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-lg text-gray-500 line-through">
                              {product.originalPrice}€
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
                          {product.brand}
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-6 pt-0">
                      <Button 
                        className={`w-full h-12 rounded-2xl font-semibold transition-all duration-300 ${
                          product.inStock 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40' 
                            : 'bg-gray-400 dark:bg-gray-600'
                        }`}
                        disabled={!product.inStock}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <FiShoppingCart className="w-5 h-5 mr-2" />
                        {product.inStock ? "Ajouter au Panier" : "Me Notifier"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Empty State */}
            {sortedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 p-12 max-w-md mx-auto border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-8xl mb-6">�</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Aucun produit trouvé
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Essayez de modifier vos filtres ou votre recherche pour découvrir nos produits d'exception
                  </p>
                  <Button 
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedBrands([]);
                      setSearchQuery("");
                      setPriceRange([0, 3000]);
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl px-8 py-3"
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}

// Enhanced Product Modal Component
function ProductModal({ product, onClose }: { product: any; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl shadow-black/20 border border-gray-200/50 dark:border-gray-700/50"
      >
        <div className="relative">
          {/* Enhanced Close Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-6 right-6 z-20"
          >
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              onClick={onClose}
            >
              <FiX className="w-5 h-5" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 p-8 lg:p-12">
            {/* Enhanced Product Images Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Main Product Image */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl h-96 flex items-center justify-center mb-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/20 dark:to-purple-900/20"></div>
                <motion.div 
                  className="text-9xl relative z-10"
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.image}
                </motion.div>
                
                {/* Floating Product Badges */}
                <div className="absolute top-6 left-6 flex flex-col space-y-2">
                  {product.isNew && (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                      Nouveau
                    </Badge>
                  )}
                  {product.originalPrice > product.price && (
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl h-20 flex items-center justify-center cursor-pointer group hover:ring-2 hover:ring-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{product.image}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Product Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Product Meta */}
              <div className="flex items-center space-x-3">
                <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                  {product.category}
                </Badge>
                <Badge className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-0">
                  {product.brand}
                </Badge>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    {product.inStock ? 'En stock' : 'Rupture'}
                  </span>
                </div>
              </div>

              {/* Product Title */}
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                {product.name}
              </h1>

              {/* Rating Section */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">{product.rating}</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  {product.reviews} avis clients
                </span>
              </div>

              {/* Pricing Section */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-100 dark:border-blue-800/30">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {product.price}€
                  </span>
                  {product.originalPrice > product.price && (
                    <div className="space-y-1">
                      <span className="text-2xl text-gray-500 line-through block">
                        {product.originalPrice}€
                      </span>
                      <span className="text-sm text-green-600 dark:text-green-400 font-semibold">
                        Économisez {product.originalPrice - product.price}€
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300">Prix TTC, livraison gratuite dès 50€</p>
              </div>

              {/* Product Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Description</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                  <span className="font-semibold text-gray-900 dark:text-white">Disponibilité</span>
                  <Badge variant={product.inStock ? "default" : "destructive"} className="shadow-sm">
                    {product.inStock ? "✓ En stock" : "✗ Rupture de stock"}
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                  <span className="font-semibold text-gray-900 dark:text-white">Livraison</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">🚚 Gratuite dès 50€</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                  <span className="font-semibold text-gray-900 dark:text-white">Garantie</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">🛡️ 2 ans constructeur</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                  <span className="font-semibold text-gray-900 dark:text-white">Retours</span>
                  <span className="text-purple-600 dark:text-purple-400 font-medium">↩️ 30 jours gratuits</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <Link href={`/checkout?product=${product.id}`} className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300" 
                      disabled={!product.inStock}
                    >
                      <FiShoppingCart className="w-5 h-5 mr-3" />
                      {product.inStock ? "Acheter Maintenant" : "Produit Indisponible"}
                    </Button>
                  </motion.div>
                </Link>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="h-14 px-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-2xl shadow-lg"
                  >
                    <FiHeart className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 pt-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                  </div>
                  <span>Paiement sécurisé</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-xs">🛡️</span>
                  </div>
                  <span>Garantie authentique</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
