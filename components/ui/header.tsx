"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import { BsCpu } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/30 border border-gray-200/50 dark:border-gray-700/50"
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Brand Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-slate-800 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <BsCpu className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">TechStore</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-widest uppercase">Premium Tech</span>
              </div>
            </Link>
          </motion.div>

          {/* Center Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center space-x-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-2xl p-1"
          >
            <Link 
              href="/" 
              className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                pathname === "/" 
                  ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md font-semibold transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/70 dark:hover:bg-gray-700/70"
              }`}
            >
              Accueil
            </Link>
            <Link 
              href="/products" 
              className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                pathname === "/products" 
                  ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md font-semibold transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/70 dark:hover:bg-gray-700/70"
              }`}
            >
              Produits
            </Link>
            <Link 
              href="/categories" 
              className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                pathname === "/categories" 
                  ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md font-semibold transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/70 dark:hover:bg-gray-700/70"
              }`}
            >
              Catégories
            </Link>
            <Link 
              href="/about" 
              className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                pathname === "/about" 
                  ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md font-semibold transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/70 dark:hover:bg-gray-700/70"
              }`}
            >
              À propos
            </Link>
            <Link 
              href="/contact" 
              className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                pathname === "/contact" 
                  ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md font-semibold transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/70 dark:hover:bg-gray-700/70"
              }`}
            >
              Contact
            </Link>
            <ThemeToggle />
          </motion.nav>

          {/* Right Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-2"
          >
            {/* Search Button */}
            <div className="hidden xl:flex relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
              <Input
                placeholder="Rechercher..."
                className="pl-10 w-48 h-9 bg-gray-100/50 dark:bg-gray-800/50 border-0 rounded-2xl focus:bg-white dark:focus:bg-gray-800 transition-all duration-300 text-sm"
              />
            </div>
            
            {/* Mobile Search Button */}
            <Button 
              size="icon" 
              variant="ghost" 
              className="xl:hidden w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-all duration-300"
            >
              <FiSearch className="w-4 h-4" />
            </Button>

            {/* Wishlist */}
            <Button 
              size="icon" 
              variant="ghost" 
              className="relative w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-all duration-300"
            >
              <FiHeart className="w-4 h-4" />
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 500 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg"
              >
                3
              </motion.span>
            </Button>

            {/* Cart */}
            <Button 
              size="icon" 
              variant="ghost" 
              className="relative w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-all duration-300"
            >
              <FiShoppingCart className="w-4 h-4" />
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 500 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg"
              >
                2
              </motion.span>
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-all duration-300"
            >
              <div className="w-4 h-3 relative">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`absolute top-1.5 left-0 w-2/3 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-3 left-0 w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          y: isMenuOpen ? 0 : -10,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`lg:hidden mt-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/30 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="p-6 space-y-1">
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 ${
              pathname === "/" 
                ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md font-semibold" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            Accueil
          </Link>
          <Link 
            href="/products" 
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 ${
              pathname === "/products" 
                ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md font-semibold" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            Produits
          </Link>
          <Link 
            href="/categories" 
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 ${
              pathname === "/categories" 
                ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md font-semibold" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            Catégories
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 ${
              pathname === "/about" 
                ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md font-semibold" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            À propos
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 ${
              pathname === "/contact" 
                ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md font-semibold" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            Contact
          </Link>
          <div className="px-4 py-3">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </header>
  );
}
