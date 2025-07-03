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
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl sm:max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-600/10 px-3 sm:px-4 py-2 rounded-full mb-6">
              <FiMail className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                Newsletter
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Restez Informé des Dernières Innovations
            </h3>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              Recevez en exclusivité nos analyses tech, nouveautés produits 
              et offres spéciales directement dans votre boîte mail
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@exemple.com"
                  className="h-12 sm:h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl text-sm sm:text-base"
                />
              </div>
              
              <Button className="h-12 sm:h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 rounded-xl transition-colors">
                S'abonner
                <FiArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
              <div className="flex items-center space-x-2 text-gray-300">
                <FiShield className="w-4 h-4 text-green-400" />
                <span className="text-sm">Données sécurisées</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FiZap className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Contenu exclusif</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <BsCheck2Circle className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Désabonnement facile</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 mt-8 sm:mt-12 text-center"
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">25K+</div>
              <div className="text-xs sm:text-sm text-gray-400">Abonnés actifs</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">2x/mois</div>
              <div className="text-xs sm:text-sm text-gray-400">Newsletters</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">4.8/5</div>
              <div className="text-xs sm:text-sm text-gray-400">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
