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

  return (
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
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-0.5 bg-white/60"></div>
                        <span className="text-white/80 text-sm tracking-widest uppercase font-medium">
                          {slide.subtitle}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {slide.badge}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white/80 text-sm">{slide.rating}</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                      {slide.description}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-3">
                      {slide.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: currentSlide === index ? 1 : 0,
                            scale: currentSlide === index ? 1 : 0.8
                          }}
                          transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                          className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white/90 border border-white/20"
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Performance Stats */}
                  <div className="grid grid-cols-3 gap-6 py-6">
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
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 group-hover:border-white/40 transition-colors">
                          <div className="text-2xl font-bold text-white mb-1">{value}</div>
                          <div className="text-sm text-white/70 capitalize flex items-center justify-center space-x-1">
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
                  className="flex justify-center items-center relative"
                >
                  <div className="relative">
                    {/* Enhanced floating background elements */}
                    <div className="absolute -inset-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute -inset-20 bg-white/5 rounded-full blur-2xl"></div>
                    <div className="absolute -inset-10 bg-white/10 rounded-full blur-xl"></div>
                    
                    {/* Main Product Container */}
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                      {/* Product Image */}
                      <motion.div 
                        className="relative z-10 flex items-center justify-center h-96 w-96"
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

                      {/* Product Info Overlay */}
                      <motion.div 
                        className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: currentSlide === index ? 1 : 0,
                          y: currentSlide === index ? 0 : 20
                        }}
                        transition={{ duration: 0.6, delay: 1 }}
                      >
                        <div className="flex items-center justify-between text-white">
                          <div>
                            <p className="text-sm text-white/70">Prix</p>
                            <p className="text-lg font-bold">
                              {slide.priceRange}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                              <BsHeart className="w-4 h-4" />
                            </Button>
                            <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                              <FiEye className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Enhanced floating specs with category-specific content */}
                    <motion.div 
                      className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/20"
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
                      <div className="flex items-center space-x-2">
                        {slide.id === 1 && <><BsLightning className="w-5 h-5 text-yellow-400" /><span className="text-sm font-medium">Connecté</span></>}
                        {slide.id === 2 && <><BsShieldCheck className="w-5 h-5 text-green-400" /><span className="text-sm font-medium">Hi-Fi</span></>}
                        {slide.id === 3 && <><BsSpeedometer className="w-5 h-5 text-red-400" /><span className="text-sm font-medium">Ultra FPS</span></>}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/20"
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
                      <div className="flex items-center space-x-2">
                        {slide.id === 1 && <><BsGift className="w-5 h-5 text-green-400" /><span className="text-sm font-medium">Bundle</span></>}
                        {slide.id === 2 && <><BsTrophy className="w-5 h-5 text-yellow-400" /><span className="text-sm font-medium">Premium</span></>}
                        {slide.id === 3 && <><AiOutlineRocket className="w-5 h-5 text-blue-400" /><span className="text-sm font-medium">Gaming</span></>}
                      </div>
                    </motion.div>

                    {/* Additional floating elements */}
                    <motion.div 
                      className="absolute top-1/2 -left-12 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white"
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
                      <AiOutlineThunderbolt className="w-6 h-6 text-blue-400" />
                    </motion.div>

                    <motion.div 
                      className="absolute top-1/4 -right-12 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white"
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
                      <BsTrophy className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Enhanced slide controls with better visuals */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((slide, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden transition-all duration-300 ${
              currentSlide === index 
                ? 'w-12 h-3 bg-white' 
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
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

      {/* Enhanced scroll indicator with icons */}
      <motion.div 
        className="absolute bottom-8 right-8 text-white/60 cursor-pointer group"
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
