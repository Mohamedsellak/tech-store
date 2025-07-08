"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { FiShoppingCart, FiStar, FiHeart, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getProductsByCategory, Product } from "@/lib/products";
import { addToCart, addToWishlist, removeFromWishlist, isInWishlist } from "@/lib/cart";
import Image from "next/image";

// Featured products by category
export default function ProductsList() {
  const [wishlistState, setWishlistState] = useState<{ [key: string]: boolean }>({});

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    // You could add a toast notification here
  };

  const handleToggleWishlist = (product: Product) => {
    const productIdStr = product.id.toString();
    if (wishlistState[productIdStr]) {
      // Remove from wishlist
      removeFromWishlist(productIdStr);
      setWishlistState(prev => ({ ...prev, [productIdStr]: false }));
    } else {
      // Add to wishlist
      addToWishlist(product);
      setWishlistState(prev => ({ ...prev, [productIdStr]: true }));
    }
  };

  // Group products by category for display
  const productsByCategory = useMemo(() => ({
    smartphones: getProductsByCategory("Smartphones").slice(0, 4),
    audio: getProductsByCategory("Audio").slice(0, 4),
    gaming: getProductsByCategory("Gaming").slice(0, 4),
    smartwatches: getProductsByCategory("Smartwatches").slice(0, 4),
  }), []);

  useEffect(() => {
    // Initialize wishlist state
    const initialWishlistState: { [key: string]: boolean } = {};
    Object.values(productsByCategory).flat().forEach(product => {
      initialWishlistState[product.id.toString()] = isInWishlist(product.id.toString());
    });
    setWishlistState(initialWishlistState);
  }, [productsByCategory]);

  const categoryDisplayNames = {
    smartphones: "Smartphones",
    audio: "Audio & Son",
    gaming: "Gaming",
    smartwatches: "Montres Connectées"
  };

  return (
    <section className="relative py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 xs:px-2 sm:px-4 md:px-6 overflow-hidden pt-0 -mt-8 xs:-mt-12 sm:-mt-16">
      {/* Enhanced background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900"></div>
      
      {/* Enhanced animated floating elements with better dark theme colors */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="hidden md:block absolute top-20 right-20 w-72 h-72 border border-blue-200/40 dark:border-blue-400/30 rounded-full shadow-sm dark:shadow-blue-400/10"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="hidden md:block absolute bottom-20 left-20 w-64 h-64 border border-purple-200/40 dark:border-purple-400/30 rounded-full shadow-sm dark:shadow-purple-400/10"
      />
      
      <div className="container mx-auto relative z-10">
        {Object.entries(productsByCategory).map(([categoryKey, products]) => (
          <div key={categoryKey} className="mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-4 xs:gap-5 sm:gap-6"
            >
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-cyan-400/20 backdrop-blur-xl border border-blue-200/40 dark:border-blue-400/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg dark:shadow-blue-400/10"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <FiStar className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </motion.div>
                  <span className="text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Collection Premium
                  </span>
                  <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse shadow-sm"></div>
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white mb-2 xs:mb-3 sm:mb-4 capitalize tracking-tight"
                >
                  {categoryKey === 'smartphones' ? (
                    <>
                      Smart
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                        phones
                      </span>
                    </>
                  ) : categoryKey === 'audio' ? (
                    <>
                      Audio &
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                        Casques
                      </span>
                    </>
                  ) : categoryKey === 'gaming' ? (
                    <>
                      Gaming &
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                        Accessoires
                      </span>
                    </>
                  ) : categoryKey === 'smartwatches' ? (
                    <>
                      Montres
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                        Connectées
                      </span>
                    </>
                  ) : categoryDisplayNames[categoryKey as keyof typeof categoryDisplayNames]}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-xl xs:max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto lg:mx-0 leading-relaxed font-light"
                >
                  Les technologies les plus avancées sélectionnées par nos experts
                  <br className="hidden lg:block" />
                  pour une expérience utilisateur exceptionnelle
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/products">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-5 md:py-6 rounded-xl xs:rounded-xl sm:rounded-2xl text-sm xs:text-base sm:text-lg transition-all duration-300 group relative overflow-hidden"
                    >
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                      />
                      <span className="relative z-10">Explorer Tout</span>
                      <motion.div
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="relative z-10"
                      >
                        <FiArrowRight className="w-3 xs:w-4 sm:w-4 md:w-5 h-3 xs:h-4 sm:h-4 md:h-5 ml-1.5 xs:ml-2 sm:ml-3" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ 
                    opacity: 1,
                    x: 0
                  }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex justify-center items-center relative group cursor-pointer w-full"
                >
                  <div className="relative w-full">
                    {/* Main Product Container with enhanced shadow and dark theme support */}
                    <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl p-4 xs:p-3 sm:p-3 md:p-4 lg:p-4 border border-gray-200/60 dark:border-gray-600/60 transition-all duration-500 flex flex-col justify-between w-full min-h-[320px] xs:min-h-[260px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[380px] xl:min-h-[400px] shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/20 dark:shadow-gray-900/20">
                      
                      {/* Enhanced badges with clean shadows */}
                      <div className="absolute top-2 xs:top-2 left-2 xs:left-2 z-20 flex flex-col space-y-1 xs:space-y-1">
                        {product.isNew && (
                          <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg xs:rounded-lg px-2 xs:px-2 py-1 xs:py-1 text-white text-xs xs:text-xs font-medium shadow-lg"
                          >
                            Nouveau
                          </motion.div>
                        )}
                        {product.originalPrice && product.originalPrice > product.price && (
                          <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg xs:rounded-lg px-2 xs:px-2 py-1 xs:py-1 text-white text-xs xs:text-xs font-medium shadow-lg"
                          >
                            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                          </motion.div>
                        )}
                      </div>

                      {/* Floating action buttons */}
                      <div className="absolute top-2 xs:top-2 right-2 xs:right-2 z-20 flex flex-col space-y-2 xs:space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleWishlist(product);
                          }}
                          className={`w-8 xs:w-7 sm:w-8 h-8 xs:h-7 sm:h-8 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center border transition-all duration-200 ${
                            wishlistState[product.id.toString()]
                              ? 'bg-red-50 border-red-200 dark:bg-red-900/30 dark:border-red-400/50'
                              : 'bg-white/95 dark:bg-gray-700/95 border-gray-200/60 dark:border-gray-600/60 hover:bg-red-50 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:border-red-400/50'
                          }`}
                          aria-label={wishlistState[product.id.toString()] ? "Retirer des favoris" : "Ajouter aux favoris"}
                        >
                          <FiHeart className={`w-4 xs:w-3.5 sm:w-4 h-4 xs:h-3.5 sm:h-4 transition-colors duration-200 ${
                            wishlistState[product.id.toString()]
                              ? 'text-red-500 fill-red-500 dark:text-red-400 dark:fill-red-400'
                              : 'text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400'
                          }`} />
                        </motion.button>
                      </div>
                      
                      {/* Product Image Container */}
                      <div className="flex-1 flex items-center justify-center px-2 xs:px-2 sm:px-3">
                        <motion.div 
                          className="relative w-full h-32 xs:h-24 sm:h-32 md:h-40 lg:h-48 xl:h-52"
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
                        className="bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg xs:rounded-lg sm:rounded-xl p-3 xs:p-2 sm:p-2 md:p-3 mt-2 border border-gray-200/60 dark:border-gray-600/60 shadow-sm dark:shadow-gray-900/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ 
                          opacity: 1,
                          y: 0
                        }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div className="flex items-start justify-between text-gray-800 dark:text-gray-100 mb-2 xs:mb-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center flex-wrap gap-2 xs:gap-1.5 mb-2 xs:mb-1.5">
                              <Badge variant="outline" className="text-blue-600 dark:text-blue-300 rounded-full border-blue-200/60 dark:border-blue-400/50 text-xs xs:text-xs bg-blue-50/60 dark:bg-blue-900/40 h-auto px-2 xs:px-2 py-1 xs:py-1 shadow-sm">
                                {product.category}
                              </Badge>
                              <div className="flex items-center space-x-1 xs:space-x-1">
                                <FiStar className="w-3 xs:w-3 h-3 xs:h-3 fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300" />
                                <span className="text-xs xs:text-xs text-gray-600 dark:text-gray-300 font-medium">
                                  {product.rating}
                                </span>
                              </div>
                            </div>
                            <p className="text-xs xs:text-xs text-gray-600 dark:text-gray-400 mb-1">Prix</p>
                            <div className="flex items-center space-x-1 flex-wrap">
                              <span className="text-base xs:text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-gray-100">
                                {product.price}€
                              </span>
                              {product.originalPrice && product.originalPrice > product.price && (
                                <span className="text-xs xs:text-xs text-gray-500 dark:text-gray-400 line-through">
                                  {product.originalPrice}€
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-end space-x-2 xs:space-x-1.5 shrink-0">
                            <Button 
                              size="sm" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(product);
                              }}
                              disabled={!product.inStock}
                              className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white border-0 h-8 w-8 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 p-0 shadow-md hover:shadow-lg dark:shadow-blue-900/20 rounded-lg xs:rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                              <FiShoppingCart className="w-4 xs:w-2.5 sm:w-3 md:w-3.5 h-4 xs:h-2.5 sm:h-3 md:h-3.5" />
                            </Button>
                            {!product.inStock && (
                              <Badge className="bg-gradient-to-r from-red-500 to-pink-500 dark:from-red-600 dark:to-pink-600 text-white text-xs xs:text-xs px-2 xs:px-1.5 py-1 xs:py-0.5 shadow-sm">
                                Rupture
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        {/* Product Name */}
                        <h3 className="text-sm xs:text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 leading-tight mt-1">
                          {product.name}
                        </h3>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
