"use client";

import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
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
  );
}
