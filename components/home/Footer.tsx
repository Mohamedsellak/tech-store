"use client";

import { FiPhone, FiMail } from "react-icons/fi";
import { BsCpu, BsShield } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 py-12 sm:py-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                <BsCpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold">TechStore</span>
                <div className="text-xs text-gray-400 tracking-wider">PREMIUM TECHNOLOGY</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Expert en technologies premium depuis 2020. 
              Nous accompagnons les professionnels dans leurs choix technologiques 
              avec des produits soigneusement sélectionnés.
            </p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <span>📧</span>
              </div>
              <div className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <span>📱</span>
              </div>
              <div className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <span>💬</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Produits</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Smartphones', 'Ordinateurs', 'Audio & Son', 'Tablettes', 'Gaming', 'Accessoires'].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base">
                  Support Technique
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base">
                  Retours & Remboursements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base">
                  Garanties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base">
                  Livraison
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base">
                  Formation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Contact</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">+33 1 23 45 67 89</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Lun-Ven 9h-19h</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-gray-900 dark:text-white font-medium text-sm sm:text-base break-all">contact@techstore.fr</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Réponse sous 24h</div>
                </div>
              </div>
              <div className="pt-2">
                <div className="inline-flex items-center space-x-2 bg-green-600/20 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                  <span>Support en ligne</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-center lg:text-left">
              © 2025 TechStore. Tous droits réservés. 
              <span className="hidden sm:inline"> | Technologies premium & innovation</span>
            </div>
            <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <Link href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Confidentialité</Link>
              <Link href="/terms-conditions" className="hover:text-gray-900 dark:hover:text-white transition-colors">Conditions</Link>
              <Link href="/refund-policy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Remboursements</Link>
              <Link href="/faq" className="hover:text-gray-900 dark:hover:text-white transition-colors">FAQ</Link>
              <div className="flex items-center space-x-2">
                <BsShield className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                <span>Site Sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
