"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiStar, FiHeart, FiArrowRight } from "react-icons/fi";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Featured products by category
const featuredProducts = {
  smartphones: [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1199,
      originalPrice: 1299,
      rating: 4.9,
      reviews: 234,
      image: "📱",
      category: "Smartphones",
      inStock: true,
      isNew: true
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
      inStock: true,
      isNew: false
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
      inStock: false,
      isNew: false
    },
    {
      id: 10,
      name: "OnePlus 12 Pro",
      price: 949,
      originalPrice: 1049,
      rating: 4.6,
      reviews: 178,
      image: "📱",
      category: "Smartphones",
      inStock: true,
      isNew: true
    }
  ],
  laptops: [
    {
      id: 4,
      name: "MacBook Pro 16\" M3 Max",
      price: 2499,
      originalPrice: 2699,
      rating: 4.9,
      reviews: 127,
      image: "💻",
      category: "Laptops",
      inStock: true,
      isNew: true
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
      inStock: true,
      isNew: false
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
      inStock: true,
      isNew: false
    },
    {
      id: 11,
      name: "ASUS ROG Strix G17",
      price: 1799,
      originalPrice: 1999,
      rating: 4.5,
      reviews: 165,
      image: "💻",
      category: "Laptops",
      inStock: true,
      isNew: false
    }
  ],
  audio: [
    {
      id: 7,
      name: "AirPods Pro 2",
      price: 249,
      originalPrice: 279,
      rating: 4.8,
      reviews: 567,
      image: "🎧",
      category: "Audio",
      inStock: true,
      isNew: false
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
      inStock: true,
      isNew: true
    },
    {
      id: 9,
      name: "Bose QuietComfort 45",
      price: 279,
      originalPrice: 329,
      rating: 4.6,
      reviews: 298,
      image: "🎧",
      category: "Audio",
      inStock: true,
      isNew: false
    },
    {
      id: 12,
      name: "Sennheiser Momentum 4",
      price: 299,
      originalPrice: 349,
      rating: 4.7,
      reviews: 213,
      image: "🎧",
      category: "Audio",
      inStock: true,
      isNew: true
    }
  ]
};

export default function ProductsList() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-2 sm:px-4 md:px-6 overflow-hidden pt-0 -mt-16">
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
        {Object.entries(featuredProducts).map(([categoryKey, products], categoryIndex) => (
          <div key={categoryKey} className="mb-8 sm:mb-12 md:mb-16 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 sm:mb-8 md:mb-12 gap-6"
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
                  className="text-3xl sm:text-4xl lg:text-7xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4 capitalize tracking-tight"
                >
                  {categoryKey === 'smartphones' ? (
                    <>
                      Smart
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                        phones
                      </span>
                    </>
                  ) : categoryKey === 'laptops' ? (
                    <>
                      Ordinateurs
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                        Portables
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
                  ) : categoryKey}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-4xl mx-auto lg:mx-0 leading-relaxed font-light"
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
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg transition-all duration-300 group relative overflow-hidden"
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
                        <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {products.map((product, index) => (
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
                        {product.originalPrice > product.price && (
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
                          className="w-8 h-8 bg-white/95 dark:bg-gray-700/95 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center border border-gray-200/60 dark:border-gray-600/60 hover:bg-red-50 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:border-red-400/50 transition-all duration-200 group/heart"
                          aria-label="Ajouter aux favoris"
                        >
                          <FiHeart className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover/heart:text-red-500 dark:group-hover/heart:text-red-400 transition-colors duration-200" />
                        </motion.button>
                      </div>
                      
                      {/* Product Image Container */}
                      <div className="flex-1 flex items-center justify-center">
                        <motion.div 
                          className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
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
                          {product.image}
                          {/* Drop shadow effect */}
                          <div className="absolute inset-0 blur-xl opacity-30 -z-10">{product.image}</div>
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
                              {product.originalPrice > product.price && (
                                <span className="text-xs text-gray-500 dark:text-gray-400 line-through">
                                  {product.originalPrice}€
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <Button size="sm" className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white border-0 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 p-0 shadow-md hover:shadow-lg dark:shadow-blue-900/20">
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
          </div>
        ))}
      </div>
    </section>
  );
}
