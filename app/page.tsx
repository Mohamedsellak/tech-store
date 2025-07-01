"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiStar, FiHeart, FiEye, FiArrowRight, FiTruck, FiShield, FiAward, FiUsers, FiPhone, FiMail, FiPlay } from "react-icons/fi";
import { AiOutlineLaptop, AiOutlineTablet, AiOutlineMobile } from "react-icons/ai";
import { BsHeadphones, BsSmartwatch, BsCpu, BsController, BsCamera, BsLightning, BsGift, BsCheck2Circle, BsShield } from "react-icons/bs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState, useEffect } from "react";

// Hero slides data with professional content
const heroSlides = [
  {
    id: 1,
    title: "Innovation Redefined",
    subtitle: "iPhone 15 Pro",
    description: "Experience professional-grade performance with titanium aerospace design and A17 Pro chip technology",
    image: "📱",
    gradient: "from-slate-900 via-blue-900 to-slate-900",
    stats: { performance: "+40%", battery: "29h", camera: "48MP Pro" }
  },
  {
    id: 2,
    title: "Creative Excellence",
    subtitle: "MacBook Pro M3",
    description: "Engineered for professionals who demand uncompromising performance and precision",
    image: "💻",
    gradient: "from-gray-900 via-slate-800 to-gray-900",
    stats: { performance: "22-core GPU", memory: "128GB", display: "Liquid Retina XDR" }
  },
  {
    id: 3,
    title: "Audio Mastery",
    subtitle: "AirPods Pro 2",
    description: "Computational audio meets premium engineering for an immersive professional experience",
    image: "🎧",
    gradient: "from-stone-900 via-neutral-800 to-stone-900",
    stats: { anc: "2x Better", spatial: "Personalized", battery: "30h Total" }
  }
];

// Product categories
const categories = [
  {
    id: 1,
    name: "Smartphones",
    icon: <AiOutlineMobile className="w-8 h-8" />,
    count: 45,
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Laptops",
    icon: <AiOutlineLaptop className="w-8 h-8" />,
    count: 32,
    color: "bg-purple-500"
  },
  {
    id: 3,
    name: "Tablets",
    icon: <AiOutlineTablet className="w-8 h-8" />,
    count: 28,
    color: "bg-green-500"
  },
  {
    id: 4,
    name: "Audio",
    icon: <BsHeadphones className="w-8 h-8" />,
    count: 56,
    color: "bg-red-500"
  },
  {
    id: 5,
    name: "Wearables",
    icon: <BsSmartwatch className="w-8 h-8" />,
    count: 23,
    color: "bg-yellow-500"
  },
  {
    id: 6,
    name: "Gaming",
    icon: <BsController className="w-8 h-8" />,
    count: 34,
    color: "bg-indigo-500"
  },
  {
    id: 7,
    name: "Cameras",
    icon: <BsCamera className="w-8 h-8" />,
    count: 19,
    color: "bg-pink-500"
  },
  {
    id: 8,
    name: "Computers",
    icon: <BsCpu className="w-8 h-8" />,
    count: 27,
    color: "bg-teal-500"
  }
];

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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Professional background patterns - behind content */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:from-transparent dark:via-gray-950/80 dark:to-gray-950 -z-10"></div>

      {/* Enhanced Hero Slider */}
      <section className="relative h-[100vh] min-h-[700px] overflow-hidden pt-20">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
          >
            {/* Professional overlay pattern */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      x: currentSlide === index ? 0 : -50
                    }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white space-y-8"
                  >
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: currentSlide === index ? 1 : 0,
                          y: currentSlide === index ? 0 : 20
                        }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-12 h-0.5 bg-white/60"></div>
                        <span className="text-white/80 text-sm tracking-widest uppercase font-medium">
                          {slide.subtitle}
                        </span>
                      </motion.div>
                      
                      <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                        {slide.title}
                      </h1>
                      
                      <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                        {slide.description}
                      </p>
                    </div>

                    {/* Performance Stats */}
                    <div className="grid grid-cols-3 gap-6 py-6">
                      {Object.entries(slide.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-white">{value}</div>
                          <div className="text-sm text-white/70 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/products">
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 h-auto">
                          <FiEye className="w-5 h-5 mr-3" />
                          Découvrir
                        </Button>
                      </Link>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto"
                      >
                        <FiPlay className="w-5 h-5 mr-3" />
                        Voir Démo
                      </Button>
                    </div>
                  </motion.div>

                  {/* Product Showcase Side */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      x: currentSlide === index ? 0 : 50
                    }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex justify-center items-center relative"
                  >
                    <div className="relative">
                      {/* Floating background elements */}
                      <div className="absolute -inset-20 bg-white/5 rounded-full blur-3xl"></div>
                      <div className="absolute -inset-10 bg-white/10 rounded-full blur-2xl"></div>
                      
                      {/* Product */}
                      <motion.div 
                        className="text-9xl relative z-10"
                        animate={{ 
                          rotateY: currentSlide === index ? [0, 5, 0] : 0,
                          scale: currentSlide === index ? [1, 1.05, 1] : 1
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        {slide.image}
                      </motion.div>
                      
                      {/* Floating specs */}
                      <motion.div 
                        className="absolute -top-8 -right-8 bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <BsLightning className="w-6 h-6" />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute -bottom-8 -left-8 bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white"
                        animate={{ y: [5, -5, 5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        <BsGift className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Enhanced slide controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 right-8 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm tracking-wider">SCROLL</span>
            <div className="w-0.5 h-8 bg-white/40"></div>
          </div>
        </motion.div>
      </section>

      {/* Professional Features Bar */}
      <section className="relative py-8 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FiTruck className="w-6 h-6" />, title: "Livraison Gratuite", desc: "Dès 50€ d'achat" },
              { icon: <FiShield className="w-6 h-6" />, title: "Garantie Premium", desc: "2 ans incluse" },
              { icon: <BsCheck2Circle className="w-6 h-6" />, title: "Support Expert", desc: "7j/7 disponible" },
              { icon: <FiAward className="w-6 h-6" />, title: "Produits Certifiés", desc: "100% authentiques" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 text-center md:text-left"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Categories Grid */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-6">
              <BsCpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider uppercase">
                Nos Catégories
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Technologies d'Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Découvrez notre sélection premium de produits technologiques, 
              choisis pour leur innovation et leur qualité exceptionnelle
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl overflow-hidden">
                  <CardContent className="p-8 relative">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 ${category.color}/5 group-hover:${category.color}/10 transition-all duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className={`${category.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        {category.count} produits premium
                      </p>
                      
                      {/* Hover arrow */}
                      <motion.div 
                        className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <FiArrowRight className="w-5 h-5 text-blue-600 mx-auto" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products by Category */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          {Object.entries(featuredProducts).map(([categoryKey, products], categoryIndex) => (
            <div key={categoryKey} className="mb-16 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-between mb-8"
              >
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 capitalize">
                    {categoryKey === 'smartphones' ? 'Smartphones' : 
                     categoryKey === 'laptops' ? 'Ordinateurs Portables' : 
                     categoryKey === 'audio' ? 'Audio & Casques' : categoryKey}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Les meilleurs produits de cette catégorie
                  </p>
                </div>
                <Link href="/products">
                  <Button variant="outline" className="group">
                    Afficher Plus
                    <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                      <CardHeader className="p-0">
                        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                            {product.image}
                          </div>
                          <div className="absolute top-4 right-4 flex flex-col space-y-2">
                            {product.isNew && (
                              <Badge className="bg-green-500">Nouveau</Badge>
                            )}
                            {!product.inStock && (
                              <Badge variant="destructive">Rupture</Badge>
                            )}
                            {product.originalPrice > product.price && (
                              <Badge variant="secondary">Promo</Badge>
                            )}
                          </div>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <FiHeart className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{product.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {product.price}€
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-lg text-gray-500 line-through">
                              {product.originalPrice}€
                            </span>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button 
                          className="w-full" 
                          disabled={!product.inStock}
                          variant={product.inStock ? "default" : "secondary"}
                        >
                          <FiShoppingCart className="w-4 h-4 mr-2" />
                          {product.inStock ? "Ajouter au Panier" : "Me Notifier"}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <FiMail className="w-4 h-4 text-white" />
                <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
                  Newsletter Premium
                </span>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Restez à la Pointe de
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {" "}l'Innovation
                </span>
              </h3>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Recevez en exclusivité les dernières actualités tech, les lancements produits 
                et nos offres premium réservées aux membres
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-8">
                <div className="flex-1 relative">
                  <Input
                    placeholder="votre.email@exemple.com"
                    className="h-14 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 rounded-2xl pl-12 text-lg"
                  />
                  <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                </div>
                <Button className="h-14 bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 rounded-2xl text-lg">
                  S'inscrire
                  <FiArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 pt-8 text-white/60 text-sm">
                <div className="flex items-center space-x-2">
                  <BsCheck2Circle className="w-4 h-4 text-green-400" />
                  <span>Pas de spam</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BsCheck2Circle className="w-4 h-4 text-green-400" />
                  <span>Contenu exclusif</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BsCheck2Circle className="w-4 h-4 text-green-400" />
                  <span>Désabonnement simple</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Footer */}
      <footer className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-600 to-slate-800 rounded-xl">
                  <BsCpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">TechStore</span>
                  <div className="text-xs text-gray-400 tracking-wider">PREMIUM TECHNOLOGY</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Votre partenaire de confiance pour les technologies d'avant-garde. 
                Nous sélectionnons les meilleurs produits pour les professionnels exigeants.
              </p>
              <div className="flex space-x-4">
                {['📧', '📱', '💬'].map((icon, i) => (
                  <div key={i} className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <span>{icon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Produits</h4>
              <ul className="space-y-3">
                {['Smartphones Premium', 'Ordinateurs Pro', 'Audio Haute-Fidélité', 'Tablettes Créatives', 'Gaming Stations', 'Accessoires Tech'].map((item) => (
                  <li key={item}>
                    <Link href="/products" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Support Expert</h4>
              <ul className="space-y-3">
                {['Centre d\'Aide', 'Support Technique', 'Garanties & SAV', 'Livraison Premium', 'Retours & Échanges', 'Formation Produits'].map((item) => (
                  <li key={item}>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact Premium</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <FiPhone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">+33 1 23 45 67 89</div>
                    <div className="text-gray-400 text-xs">Lun-Ven 9h-19h</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <FiMail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">pro@techstore.fr</div>
                    <div className="text-gray-400 text-xs">Support prioritaire</div>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center space-x-2 bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Support en ligne</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 TechStore Premium. Tous droits réservés. 
                <span className="hidden sm:inline"> | Créé avec excellence et innovation</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Conditions</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                <div className="flex items-center space-x-2">
                  <BsShield className="w-4 h-4 text-green-400" />
                  <span>Site Sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
