"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiHeart, FiArrowRight, FiStar } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { BsHeadphones, BsSmartwatch, BsCpu, BsController, BsCamera, BsKeyboard } from "react-icons/bs";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { categories as productCategories, getProductsByCategory, getFeaturedProducts, Product } from "@/lib/products";
import { addToCart, addToWishlist, removeFromWishlist, isInWishlist } from "@/lib/cart";
import Image from "next/image";

// Interface for category structure
interface CategoryItem {
  id: string;
  name: string;
  value: string;
  description: string;
  icon: React.ReactElement;
  count: number;
  gradient: string;
  featured: boolean;
  subcategories: string[];
}

// Icon mapping for categories
const categoryIcons: { [key: string]: React.ReactElement } = {
  'Smartphones': <AiOutlineMobile className="w-8 h-8" />,
  'Audio': <BsHeadphones className="w-8 h-8" />,
  'Gaming': <BsController className="w-8 h-8" />,
  'Smartwatches': <BsSmartwatch className="w-8 h-8" />,
  'Cameras': <BsCamera className="w-8 h-8" />,
  'Accessories': <BsKeyboard className="w-8 h-8" />
};

// Color gradients for categories
const categoryGradients: { [key: string]: string } = {
  'Smartphones': 'from-blue-500 to-cyan-500',
  'Audio': 'from-red-500 to-orange-500',
  'Gaming': 'from-indigo-500 to-purple-500',
  'Smartwatches': 'from-yellow-500 to-amber-500',
  'Cameras': 'from-pink-500 to-rose-500',
  'Accessories': 'from-slate-500 to-gray-500'
};

// Category descriptions
const categoryDescriptions: { [key: string]: string } = {
  'Smartphones': 'Les derniers smartphones avec designs innovants',
  'Audio': 'Équipement audio professionnel et casques premium',
  'Gaming': 'Consoles et accessoires gaming pour tous les joueurs',
  'Smartwatches': 'Montres connectées et wearables modernes',
  'Cameras': 'Appareils photo et équipement de capture vidéo',
  'Accessories': 'Périphériques et accessoires informatiques'
};

// Get top brands for each category
const getCategoryBrands = (categoryValue: string) => {
  const products = getProductsByCategory(categoryValue);
  const brands = [...new Set(products.map(p => p.brand))];
  return brands.slice(0, 3);
};

export default function CategoriesPage() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [wishlistState, setWishlistState] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  useEffect(() => {
    // Initialize wishlist state for featured products
    const initialWishlistState: { [key: string]: boolean } = {};
    getFeaturedProducts().forEach(product => {
      initialWishlistState[product.id.toString()] = isInWishlist(product.id.toString());
    });
    setWishlistState(initialWishlistState);
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    // You could add a toast notification here
  };

  const handleToggleWishlist = (product: Product) => {
    const productIdStr = product.id.toString();
    if (wishlistState[productIdStr]) {
      removeFromWishlist(productIdStr);
      setWishlistState(prev => ({ ...prev, [productIdStr]: false }));
    } else {
      addToWishlist(product);
      setWishlistState(prev => ({ ...prev, [productIdStr]: true }));
    }
  };

  // Build categories from actual product data
  const categories = productCategories
    .filter(cat => cat.value !== 'all') // Exclude "all" category
    .map(cat => {
      const products = getProductsByCategory(cat.value);
      const brands = getCategoryBrands(cat.value);
      const isFeatured = ['Smartphones', 'Audio', 'Gaming'].includes(cat.value);
      
      return {
        id: cat.value,
        name: cat.name,
        value: cat.value,
        description: categoryDescriptions[cat.value] || `Découvrez notre sélection de ${cat.name.toLowerCase()}`,
        icon: categoryIcons[cat.value] || <BsCpu className="w-8 h-8" />,
        count: products.length,
        gradient: categoryGradients[cat.value] || 'from-gray-500 to-slate-500',
        featured: isFeatured,
        subcategories: brands.length > 0 ? brands : ['Premium', 'Standard', 'Pro']
      };
    });

  const filteredCategories = categories.filter((category: { featured: boolean }) => 
    filter === 'all' || category.featured
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-28 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.03)_60deg,transparent_120deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.02)_60deg,transparent_120deg)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-6">
            <BsCpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider uppercase">
              Nos Catégories
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Explorez Toutes Nos Catégories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre large sélection de produits technologiques organisés par catégories 
            pour faciliter votre recherche du produit parfait
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
            <Button
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'default' : 'ghost'}
              className="rounded-xl"
            >
              Toutes les catégories
            </Button>
            <Button
              onClick={() => setFilter('featured')}
              variant={filter === 'featured' ? 'default' : 'ghost'}
              className="rounded-xl"
            >
              Catégories populaires
            </Button>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCategories.map((category: CategoryItem, index: number) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => router.push(`/products?category=${category.value}`)}
            >
              <Card className="h-full text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl overflow-hidden relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Featured Badge */}
                {category.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
                      ⭐ Populaire
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8 relative z-10">
                  <div className={`bg-gradient-to-br ${category.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {category.icon}
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {category.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.count}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      produits
                    </span>
                  </div>

                  {/* Subcategories */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {category.subcategories.slice(0, 3).map((sub: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {sub}
                      </Badge>
                    ))}
                    {category.subcategories.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{category.subcategories.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Hover Arrow */}
                  <motion.div 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push(`/products?category=${category.value}`);
                      }}
                    >
                      Explorer
                      <FiArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-cyan-400/20 backdrop-blur-xl border border-blue-200/40 dark:border-blue-400/30 px-6 py-3 rounded-full mb-6 shadow-lg dark:shadow-blue-400/10"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FiStar className="w-5 h-5 text-blue-600 dark:text-blue-300" />
              </motion.div>
              <span className="text-blue-600 dark:text-blue-300 text-sm font-semibold tracking-wider uppercase">
                Collection Premium
              </span>
              <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse shadow-sm"></div>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Produits Populaires par Catégorie
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez les produits les plus appréciés dans chaque catégorie
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {getFeaturedProducts().slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ 
                  opacity: 1,
                  x: 0
                }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex justify-center items-center relative group cursor-pointer"
              >
                <div className="relative">
                  {/* Main Product Container with enhanced shadow and dark theme support */}
                  <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-3 md:p-4 border border-gray-200/60 dark:border-gray-600/60 transition-all duration-500 flex flex-col justify-between h-[280px] w-[220px] sm:h-[320px] sm:w-[260px] md:h-[380px] md:w-[320px] lg:h-[420px] lg:w-[350px] shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/20 dark:shadow-gray-900/20">
                    
                    {/* Enhanced badges with clean shadows */}
                    <div className="absolute top-2 left-2 z-20 flex flex-col space-y-1">
                      {product.isNew && (
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg px-2 py-1 text-white text-xs font-medium shadow-lg"
                        >
                          Nouveau
                        </motion.div>
                      )}
                      {product.originalPrice && product.originalPrice > product.price && (
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg px-2 py-1 text-white text-xs font-medium shadow-lg"
                        >
                          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </motion.div>
                      )}
                    </div>

                    {/* Floating action buttons */}
                    <div className="absolute top-2 right-2 z-20 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleWishlist(product);
                        }}
                        className={`w-8 h-8 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center border transition-all duration-200 ${
                          wishlistState[product.id.toString()]
                            ? 'bg-red-50 border-red-200 dark:bg-red-900/30 dark:border-red-400/50'
                            : 'bg-white/95 dark:bg-gray-700/95 border-gray-200/60 dark:border-gray-600/60 hover:bg-red-50 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:border-red-400/50'
                        }`}
                        aria-label={wishlistState[product.id.toString()] ? "Retirer des favoris" : "Ajouter aux favoris"}
                      >
                        <FiHeart className={`w-4 h-4 transition-colors duration-200 ${
                          wishlistState[product.id.toString()]
                            ? 'text-red-500 fill-red-500 dark:text-red-400 dark:fill-red-400'
                            : 'text-gray-600 dark:text-gray-300'
                        }`} />
                      </motion.button>
                    </div>
                    
                    {/* Product Image Container */}
                    <div className="flex-1 flex items-center justify-center">
                      <motion.div 
                        className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56"
                        animate={{ 
                          rotateY: [0, 2, 0],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        whileHover={{ scale: 1.1, rotateY: 15 }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-contain"
                        />
                        {/* Drop shadow effect */}
                        <div className="absolute inset-0 blur-xl opacity-30 -z-10">
                          <Image
                            src={product.image}
                            alt=""
                            width={400}
                            height={400}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Enhanced Product Info Section with better dark theme */}
                    <motion.div 
                      className="bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 mt-1 md:mt-2 border border-gray-200/60 dark:border-gray-600/60 shadow-sm dark:shadow-gray-900/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ 
                        opacity: 1,
                        y: 0
                      }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center space-x-1 mb-1">
                            <Badge variant="outline" className="py-3 text-blue-600 dark:text-blue-300 rounded-full border-blue-200/60 dark:border-blue-400/50 text-xs bg-blue-50/60 dark:bg-blue-900/40 h-4 shadow-sm">
                              {product.category}
                            </Badge>
                            <div className="flex items-center space-x-1">
                              <FiStar className="w-3 h-3 fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300" />
                              <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                                {product.rating}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Prix</p>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-gray-100">
                              {product.price}€
                            </span>
                            {product.originalPrice && product.originalPrice > product.price && (
                              <span className="text-xs text-gray-500 dark:text-gray-400 line-through">
                                {product.originalPrice}€
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Button 
                            size="sm" 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToCart(product);
                            }}
                            disabled={!product.inStock}
                            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white border-0 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 p-0 shadow-md hover:shadow-lg dark:shadow-blue-900/20 disabled:bg-gray-400 disabled:cursor-not-allowed"
                          >
                            <FiShoppingCart className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                          </Button>
                          {!product.inStock && (
                            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 dark:from-red-600 dark:to-pink-600 text-white text-xs px-2 py-1 shadow-sm">
                              Rupture
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      {/* Product Name */}
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 leading-tight">
                        {product.name}
                      </h3>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Vous ne trouvez pas ce que vous cherchez ?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contactez notre équipe d&apos;experts pour des recommandations personnalisées
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl">
                    Nous Contacter
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white/10 hover:text-white rounded-xl">
                    Voir Tous les Produits
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
