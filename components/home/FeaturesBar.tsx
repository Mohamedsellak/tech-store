"use client";

import { motion } from "framer-motion";
import { FiTruck, FiShield, FiAward } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";

const features = [
  { icon: <FiTruck className="w-6 h-6" />, title: "Livraison Gratuite", desc: "Dès 50€ d'achat" },
  { icon: <FiShield className="w-6 h-6" />, title: "Garantie Premium", desc: "2 ans incluse" },
  { icon: <BsCheck2Circle className="w-6 h-6" />, title: "Support Expert", desc: "7j/7 disponible" },
  { icon: <FiAward className="w-6 h-6" />, title: "Produits Certifiés", desc: "100% authentiques" }
];

export default function FeaturesBar() {
  return (
    <section className="relative py-8 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
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
  );
}
