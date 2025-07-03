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
    }
  ]
};

export default function ProductsList() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-2 sm:px-4 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="hidden md:block absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-purple-200/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="hidden md:block absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-200/10 to-cyan-200/10 dark:from-green-500/5 dark:to-cyan-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        {Object.entries(featuredProducts).map(([categoryKey, products], categoryIndex) => (
          <div key={categoryKey} className="mb-16 sm:mb-20 md:mb-24 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 sm:mb-12 md:mb-16 gap-6"
            >
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl border border-blue-200/30 dark:border-blue-500/20 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <FiStar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Collection Premium
                  </span>
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4 capitalize tracking-tight"
                >
                  {categoryKey === 'smartphones' ? 'Smartphones' : 
                   categoryKey === 'laptops' ? 'Ordinateurs Portables' : 
                   categoryKey === 'audio' ? 'Audio & Casques' : categoryKey}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed"
                >
                  Les technologies les plus avancées sélectionnées par nos experts
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
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group relative overflow-hidden"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <Card className="h-full overflow-hidden hover:shadow-3xl transition-all duration-700 border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl relative">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    <CardHeader className="p-0 relative">
                      <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden rounded-t-3xl">
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)] transition-all duration-500"></div>
                        
                        <motion.div 
                          className="text-6xl sm:text-7xl md:text-8xl group-hover:scale-110 transition-transform duration-500 relative z-10"
                          animate={{
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {product.image}
                        </motion.div>
                        
                        {/* Enhanced badges */}
                        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex flex-col space-y-2">
                          {product.isNew && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-2 sm:px-3 py-1 shadow-lg text-xs">
                                ✨ Nouveau
                              </Badge>
                            </motion.div>
                          )}
                          {!product.inStock && (
                            <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-2 sm:px-3 py-1 shadow-lg text-xs">
                              🚫 Rupture
                            </Badge>
                          )}
                          {product.originalPrice > product.price && (
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-2 sm:px-3 py-1 shadow-lg text-xs">
                                🔥 Promo
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                        
                        {/* Enhanced heart button */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="absolute top-4 sm:top-6 left-4 sm:left-6"
                        >
                          <Button
                            size="icon"
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20 rounded-2xl transition-all duration-300 group-hover:opacity-100 opacity-0"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FiHeart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 sm:p-8 relative z-10">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <Badge 
                          variant="outline" 
                          className="border-blue-200 text-blue-600 dark:border-blue-500 dark:text-blue-400 font-semibold px-2 sm:px-3 py-1 text-xs"
                        >
                          {product.category}
                        </Badge>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          >
                            <FiStar className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {product.rating} ({product.reviews} avis)
                          </span>
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 font-bold">
                        {product.name}
                      </CardTitle>
                      
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                        <motion.span 
                          className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white"
                          whileHover={{ scale: 1.05 }}
                        >
                          {product.price}€
                        </motion.span>
                        {product.originalPrice > product.price && (
                          <div className="flex flex-col">
                            <span className="text-base sm:text-lg text-gray-500 line-through">
                              {product.originalPrice}€
                            </span>
                            <span className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-semibold">
                              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Enhanced progress bar */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span>Popularité</span>
                          <span>{Math.min(Math.round((product.reviews / 600) * 100), 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min(Math.round((product.reviews / 600) * 100), 100)}%` }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
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
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-6 sm:p-8 pt-0 relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full"
                      >
                        <Button 
                          className={`w-full h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-2xl transition-all duration-300 relative overflow-hidden ${
                            product.inStock 
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-2xl hover:shadow-blue-500/25" 
                              : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                          }`}
                          disabled={!product.inStock}
                        >
                          {product.inStock && (
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
                          )}
                          <div className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                            <FiShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                              {product.inStock ? "Ajouter au Panier" : "Me Notifier de la Disponibilité"}
                            </span>
                          </div>
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
