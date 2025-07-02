"use client";

import { motion } from "framer-motion";
import { FiEye, FiPlay, FiChevronDown, FiStar, FiCpu, FiZap, FiBattery, FiCamera } from "react-icons/fi";
import { BsLightning, BsGift, BsShieldCheck, BsSpeedometer, BsTrophy, BsHeart } from "react-icons/bs";
import { AiOutlineThunderbolt, AiOutlineRocket } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Hero slides data with general tech content
const heroSlides = [
  {
    id: 1,
    title: "L'Écosystème Tech Ultime",
    subtitle: "Collection Premium",
    description: "Découvrez notre sélection complète d'appareils connectés conçus pour s'intégrer parfaitement dans votre vie digitale",
    image: "/assets/images/hero/1.png",
    gradient: "from-slate-900 via-blue-900 to-slate-900",
    stats: { devices: "4+ Appareils", sync: "Synchronisés", ecosystem: "Intégré" },
    features: ["Connectivité Sans Fil", "Synchronisation Cloud", "Design Premium"],
    badge: "COLLECTION",
    rating: 4.9,
    priceRange: "À partir de 149€"
  },
  {
    id: 2,
    title: "Audio & Wearables",
    subtitle: "Expérience Immersive",
    description: "Plongez dans un univers sonore exceptionnel avec nos casques et montres connectées de dernière génération",
    image: "/assets/images/hero/2.png",
    gradient: "from-purple-900 via-indigo-900 to-purple-900",
    stats: { quality: "Hi-Fi", battery: "30h+", features: "Smart" },
    features: ["Audio Spatial", "Réduction de Bruit", "Résistance à l'Eau"],
    badge: "AUDIO",
    rating: 4.8,
    priceRange: "À partir de 199€"
  },
  {
    id: 3,
    title: "Setup Gaming Pro",
    subtitle: "Performance Maximale",
    description: "Équipez-vous des dernières technologies gaming pour des performances exceptionnelles et une expérience immersive",
    image: "/assets/images/hero/3.png",
    gradient: "from-emerald-900 via-teal-900 to-emerald-900",
    stats: { fps: "144+ FPS", resolution: "4K Ready", performance: "Ultra" },
    features: ["RGB Personnalisable", "Refroidissement Avancé", "Ultra Performance"],
    badge: "GAMING",
    rating: 4.7,
    priceRange: "À partir de 899€"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate dynamic padding based on screen size and header
  const getResponsivePadding = () => {
    // Account for fixed header with floating design
    return "pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36";
  };

  return (
    <section className={`relative h-screen min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] overflow-hidden ${getResponsivePadding()}`}>
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
          
          <div className="relative h-full flex items-center justify-center py-8 sm:py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : -50
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left"
                >
                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: currentSlide === index ? 1 : 0,
                        y: currentSlide === index ? 0 : 20
                      }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-center justify-between flex-wrap gap-2"
                    >
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="w-8 md:w-12 h-0.5 bg-white/60"></div>
                        <span className="text-white/80 text-xs md:text-sm tracking-widest uppercase font-medium">
                          {slide.subtitle}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 md:space-x-4">
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs md:text-sm">
                          {slide.badge}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <FiStar className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                          <span className="text-white/80 text-xs md:text-sm">{slide.rating}</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      {slide.description}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                      {slide.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: currentSlide === index ? 1 : 0,
                            scale: currentSlide === index ? 1 : 0.8
                          }}
                          transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                          className="bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm text-white/90 border border-white/20"
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Performance Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 py-4 sm:py-6 md:py-8">
                    {Object.entries(slide.stats).map(([key, value], i) => (
                      <motion.div 
                        key={key} 
                        className="text-center group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: currentSlide === index ? 1 : 0,
                          y: currentSlide === index ? 0 : 20
                        }}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 border border-white/20 group-hover:border-white/40 transition-colors">
                          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">{value}</div>
                          <div className="text-xs sm:text-xs md:text-sm text-white/70 capitalize flex items-center justify-center space-x-1">
                            {key === 'devices' && <FiCpu className="w-3 h-3" />}
                            {key === 'sync' && <BsLightning className="w-3 h-3" />}
                            {key === 'ecosystem' && <BsTrophy className="w-3 h-3" />}
                            {key === 'quality' && <FiZap className="w-3 h-3" />}
                            {key === 'battery' && <FiBattery className="w-3 h-3" />}
                            {key === 'features' && <BsShieldCheck className="w-3 h-3" />}
                            {key === 'fps' && <BsSpeedometer className="w-3 h-3" />}
                            {key === 'resolution' && <FiCamera className="w-3 h-3" />}
                            {key === 'performance' && <AiOutlineThunderbolt className="w-3 h-3" />}
                            <span>{key}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced Product Showcase Side */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : 50
                  }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex justify-center items-center relative order-1 lg:order-2"
                >
                  <div className="relative">
                    {/* Enhanced floating background elements */}
                    <div className="absolute -inset-8 sm:-inset-12 md:-inset-16 lg:-inset-20 xl:-inset-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
                    <div className="absolute -inset-6 sm:-inset-8 md:-inset-12 lg:-inset-16 bg-white/5 rounded-full blur-xl sm:blur-2xl"></div>
                    <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 lg:-inset-8 bg-white/10 rounded-full blur-lg sm:blur-xl"></div>
                    
                    {/* Main Product Container with Flex Layout */}
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-3 md:p-4 border border-white/10 flex flex-col justify-between h-[280px] w-[220px] sm:h-[320px] sm:w-[260px] md:h-[380px] md:w-[320px] lg:h-[420px] lg:w-[350px]">
                      {/* Product Image Container */}
                      <div className="flex-1 flex items-center justify-center">
                        <motion.div 
                          className="relative h-36 w-36 sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-64 lg:w-64"
                          animate={{ 
                            rotateY: currentSlide === index ? [0, 2, 0] : 0,
                            scale: currentSlide === index ? [1, 1.02, 1] : 1
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        >
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority={index === 0}
                          />
                        </motion.div>
                      </div>

                      {/* Product Info Section */}
                      <motion.div 
                        className="bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl p-2 md:p-3 mt-1 md:mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: currentSlide === index ? 1 : 0,
                          y: currentSlide === index ? 0 : 20
                        }}
                        transition={{ duration: 0.6, delay: 1 }}
                      >
                        <div className="flex items-center justify-between text-white">
                          <div>
                            <p className="text-xs sm:text-sm text-white/70">Prix</p>
                            <p className="text-sm sm:text-base md:text-lg font-bold">
                              {slide.priceRange}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 p-0">
                              <BsHeart className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                            </Button>
                            <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 p-0">
                              <FiEye className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Enhanced floating specs with category-specific content */}
                    <motion.div 
                      className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 lg:-top-6 lg:-right-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-1.5 sm:p-2 md:p-3 lg:p-4 text-white border border-white/20 z-20"
                      animate={{ 
                        y: [-5, 5, -5],
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 0.8
                      }}
                      transition={{ 
                        y: { duration: 2, repeat: Infinity },
                        opacity: { duration: 0.6, delay: 0.8 },
                        scale: { duration: 0.6, delay: 0.8 }
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                    >
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        {slide.id === 1 && <><BsLightning className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400" /><span className="text-xs sm:text-sm font-medium">Connecté</span></>}
                        {slide.id === 2 && <><BsShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400" /><span className="text-xs sm:text-sm font-medium">Hi-Fi</span></>}
                        {slide.id === 3 && <><BsSpeedometer className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-400" /><span className="text-xs sm:text-sm font-medium">Ultra FPS</span></>}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 lg:-bottom-6 lg:-left-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-1.5 sm:p-2 md:p-3 lg:p-4 text-white border border-white/20 z-20"
                      animate={{ 
                        y: [5, -5, 5],
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 0.8
                      }}
                      transition={{ 
                        y: { duration: 2, repeat: Infinity, delay: 1 },
                        opacity: { duration: 0.6, delay: 0.9 },
                        scale: { duration: 0.6, delay: 0.9 }
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                    >
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        {slide.id === 1 && <><BsGift className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400" /><span className="text-xs sm:text-sm font-medium">Bundle</span></>}
                        {slide.id === 2 && <><BsTrophy className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400" /><span className="text-xs sm:text-sm font-medium">Premium</span></>}
                        {slide.id === 3 && <><AiOutlineRocket className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400" /><span className="text-xs sm:text-sm font-medium">Gaming</span></>}
                      </div>
                    </motion.div>

                    {/* Additional floating elements - Hidden on smaller screens */}
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -left-8 xl:-left-12 bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3 text-white z-10"
                      animate={{ 
                        x: [-3, 3, -3],
                        opacity: currentSlide === index ? 1 : 0 
                      }}
                      transition={{ 
                        x: { duration: 2.5, repeat: Infinity, delay: 0.5 },
                        opacity: { duration: 0.6, delay: 1 }
                      }}
                      initial={{ opacity: 0 }}
                    >
                      <AiOutlineThunderbolt className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                    </motion.div>

                    <motion.div 
                      className="hidden lg:block absolute top-1/4 -right-8 xl:-right-12 bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3 text-white z-10"
                      animate={{ 
                        x: [3, -3, 3],
                        opacity: currentSlide === index ? 1 : 0 
                      }}
                      transition={{ 
                        x: { duration: 2.5, repeat: Infinity, delay: 1.5 },
                        opacity: { duration: 0.6, delay: 1.1 }
                      }}
                      initial={{ opacity: 0 }}
                    >
                      <BsTrophy className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Enhanced slide controls with better visuals */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {heroSlides.map((slide, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden transition-all duration-300 ${
              currentSlide === index 
                ? 'w-6 sm:w-8 md:w-10 lg:w-12 h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-white' 
                : 'w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-white/40 hover:bg-white/60'
            } rounded-full`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentSlide === index && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 5, ease: 'linear' }}
                key={currentSlide}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Enhanced scroll indicator with icons - Hidden on mobile */}
      <motion.div 
        className="hidden lg:flex absolute bottom-6 md:bottom-8 lg:bottom-10 right-4 md:right-6 lg:right-8 text-white/60 cursor-pointer group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center space-y-2 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 group-hover:border-white/30 transition-colors">
          <FiChevronDown className="w-4 h-4 animate-bounce" />
          <span className="text-sm tracking-wider font-medium">SCROLL</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
