"use client";

import { FiPhone, FiMail } from "react-icons/fi";
import { BsCpu, BsShield } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
