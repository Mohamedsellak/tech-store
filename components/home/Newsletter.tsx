"use client";

import { motion } from "framer-motion";
import { FiMail, FiArrowRight, FiShield, FiZap } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl sm:max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-600/10 px-3 sm:px-4 py-2 rounded-full mb-6">
              <FiMail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                Newsletter
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Restez Informé des Dernières Innovations
            </h3>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              Recevez en exclusivité nos analyses tech, nouveautés produits 
              et offres spéciales directement dans votre boîte mail
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-xl p-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@exemple.com"
                  className="h-12 bg-white/60 dark:bg-white/10 border-gray-200 dark:border-white/30 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-lg"
                />
              </div>
              
              <Button className="h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 rounded-lg transition-colors">
                S'abonner
                <FiArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mt-6 pt-4">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <FiShield className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm">Données sécurisées</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <FiZap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm">Contenu exclusif</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <BsCheck2Circle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm">Désabonnement facile</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-8 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">25K+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Abonnés actifs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">2x/mois</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Newsletters</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">4.8/5</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
