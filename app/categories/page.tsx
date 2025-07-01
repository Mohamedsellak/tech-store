"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiStar, FiHeart, FiEye, FiArrowRight } from "react-icons/fi";
import { AiOutlineLaptop, AiOutlineTablet, AiOutlineMobile } from "react-icons/ai";
import { BsHeadphones, BsSmartwatch, BsCpu, BsController, BsCamera, BsKeyboard, BsMouse, BsDisplay } from "react-icons/bs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

// Extended categories data
const categories = [
  {
    id: 1,
    name: "Smartphones",
    description: "Les derniers smartphones haut de gamme",
    icon: <AiOutlineMobile className="w-8 h-8" />,
    count: 45,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
    subcategories: ["iPhone", "Samsung Galaxy", "Google Pixel", "OnePlus", "Xiaomi"]
  },
  {
    id: 2,
    name: "Ordinateurs Portables",
    description: "Laptops professionnels et gaming",
    icon: <AiOutlineLaptop className="w-8 h-8" />,
    count: 32,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-pink-500",
    featured: true,
    subcategories: ["MacBook", "ThinkPad", "Gaming", "Ultrabooks", "Workstations"]
  },
  {
    id: 3,
    name: "Tablettes",
    description: "Tablettes créatives et productives",
    icon: <AiOutlineTablet className="w-8 h-8" />,
    count: 28,
    color: "bg-green-500",
    gradient: "from-green-500 to-emerald-500",
    featured: false,
    subcategories: ["iPad", "Surface", "Android", "Graphiques", "E-readers"]
  },
  {
    id: 4,
    name: "Audio & Casques",
    description: "Équipement audio professionnel",
    icon: <BsHeadphones className="w-8 h-8" />,
    count: 56,
    color: "bg-red-500",
    gradient: "from-red-500 to-orange-500",
    featured: true,
    subcategories: ["AirPods", "Studio", "Gaming", "Sport", "Hi-Fi"]
  },
  {
    id: 5,
    name: "Montres Connectées",
    description: "Wearables et fitness trackers",
    icon: <BsSmartwatch className="w-8 h-8" />,
    count: 23,
    color: "bg-yellow-500",
    gradient: "from-yellow-500 to-amber-500",
    featured: false,
    subcategories: ["Apple Watch", "Galaxy Watch", "Fitbit", "Garmin", "Amazfit"]
  },
  {
    id: 6,
    name: "Gaming",
    description: "Consoles et accessoires gaming",
    icon: <BsController className="w-8 h-8" />,
    count: 34,
    color: "bg-indigo-500",
    gradient: "from-indigo-500 to-purple-500",
    featured: true,
    subcategories: ["PlayStation", "Xbox", "Nintendo", "PC Gaming", "VR"]
  },
  {
    id: 7,
    name: "Appareils Photo",
    description: "Caméras et équipement photo",
    icon: <BsCamera className="w-8 h-8" />,
    count: 19,
    color: "bg-pink-500",
    gradient: "from-pink-500 to-rose-500",
    featured: false,
    subcategories: ["DSLR", "Mirrorless", "Action Cams", "Drones", "Lentilles"]
  },
  {
    id: 8,
    name: "PC & Composants",
    description: "Ordinateurs et composants PC",
    icon: <BsCpu className="w-8 h-8" />,
    count: 27,
    color: "bg-teal-500",
    gradient: "from-teal-500 to-cyan-500",
    featured: false,
    subcategories: ["Processeurs", "Cartes Graphiques", "RAM", "Stockage", "Boîtiers"]
  },
  {
    id: 9,
    name: "Périphériques",
    description: "Claviers, souris et accessoires",
    icon: <BsKeyboard className="w-8 h-8" />,
    count: 67,
    color: "bg-slate-500",
    gradient: "from-slate-500 to-gray-500",
    featured: false,
    subcategories: ["Claviers", "Souris", "Webcams", "Microphones", "Hubs USB"]
  },
  {
    id: 10,
    name: "Écrans & Moniteurs",
    description: "Moniteurs professionnels et gaming",
    icon: <BsDisplay className="w-8 h-8" />,
    count: 41,
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-teal-500",
    featured: false,
    subcategories: ["4K", "Gaming", "Ultrawide", "Professionnels", "Portables"]
  }
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredCategories = categories.filter(category => 
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
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
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
                    {category.subcategories.slice(0, 3).map((sub, idx) => (
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
                    <Link href={`/products?category=${category.name.toLowerCase()}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                        Explorer
                        <FiArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Produits Populaires par Catégorie
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez les produits les plus appréciés dans chaque catégorie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "iPhone 15 Pro Max", 
                category: "Smartphones", 
                price: 1199, 
                rating: 4.9, 
                image: "📱",
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                name: "MacBook Pro M3", 
                category: "Laptops", 
                price: 2499, 
                rating: 4.8, 
                image: "💻",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                name: "AirPods Pro 2", 
                category: "Audio", 
                price: 249, 
                rating: 4.7, 
                image: "🎧",
                gradient: "from-red-500 to-orange-500"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardHeader className="p-0">
                    <div className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                      <div className="text-6xl">{product.image}</div>
                      <Badge className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white border-0">
                        ⭐ {product.rating}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">{product.category}</Badge>
                    <CardTitle className="text-xl mb-3">{product.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {product.price}€
                      </span>
                      <Button size="sm" className="rounded-xl">
                        <FiEye className="w-4 h-4 mr-2" />
                        Voir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
                Contactez notre équipe d'experts pour des recommandations personnalisées
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl">
                    Nous Contacter
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-xl">
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
