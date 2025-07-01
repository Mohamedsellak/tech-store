"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineLaptop, AiOutlineTablet, AiOutlineMobile } from "react-icons/ai";
import { BsHeadphones, BsSmartwatch, BsCpu, BsController, BsCamera } from "react-icons/bs";
import { Card, CardContent } from "@/components/ui/card";

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

export default function CategoriesGrid() {
  return (
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
  );
}
