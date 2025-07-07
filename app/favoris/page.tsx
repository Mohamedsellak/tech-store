"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiHeart, FiShoppingCart, FiStar, FiTrash2, FiArrowLeft } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { 
  getWishlist, 
  removeFromWishlist, 
  addToCart,
  WishlistItem 
} from "@/lib/cart";

export default function FavorisPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setWishlistItems(getWishlist());
    setIsLoading(false);
  }, []);

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
    setWishlistItems(getWishlist());
  };

  const handleAddToCart = (item: WishlistItem) => {
    addToCart(item, 1);
    // Optionally remove from wishlist when added to cart
    // removeFromWishlist(item.id);
    // setWishlistItems(getWishlist());
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-28 pb-12 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

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
          className="mb-8"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Link href="/products">
              <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <FiArrowLeft className="w-4 h-4 mr-2" />
                Retour aux produits
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <FiHeart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Mes Favoris
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {wishlistItems.length > 0 
                  ? `${wishlistItems.length} produit${wishlistItems.length > 1 ? 's' : ''} dans vos favoris`
                  : 'Aucun produit favori pour le moment'
                }
              </p>
            </div>
          </div>
        </motion.div>

        {wishlistItems.length === 0 ? (
          // Empty Wishlist State
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <Card className="max-w-md mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl">
              <CardContent className="p-12">
                <div className="text-8xl mb-6">💖</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Votre liste de favoris est vide
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Explorez nos produits et ajoutez vos coups de cœur à vos favoris pour les retrouver facilement
                </p>
                <div className="space-y-4">
                  <Link href="/products">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl">
                      Découvrir nos produits
                    </Button>
                  </Link>
                  <Link href="/categories">
                    <Button variant="outline" className="w-full rounded-2xl">
                      Parcourir par catégories
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-xl shadow-gray-900/10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl">
                  <CardHeader className="p-0 relative">
                    {/* Product Image */}
                    <div className="relative h-64 bg-gray-50 dark:bg-gray-700 rounded-t-3xl flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="object-contain w-full h-full p-4 group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col space-y-2">
                        {item.isNew && (
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                            Nouveau
                          </Badge>
                        )}
                        {item.originalPrice && item.originalPrice > item.price && (
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                            -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                          </Badge>
                        )}
                        {!item.inStock && (
                          <Badge className="bg-red-500 text-white border-0">
                            Rupture
                          </Badge>
                        )}
                      </div>

                      {/* Remove from wishlist button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleRemoveFromWishlist(item.id)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center border border-gray-200/60 dark:border-gray-600/60 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        aria-label="Retirer des favoris"
                      >
                        <FiTrash2 className="w-4 h-4 text-red-500" />
                      </motion.button>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    {/* Category and Rating */}
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-blue-600 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                        {item.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 leading-tight">
                      {item.name}
                    </h3>

                    {/* Brand */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.brand}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-6">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {item.price}€
                      </span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                          {item.originalPrice}€
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Button
                        onClick={() => handleAddToCart(item)}
                        disabled={!item.inStock}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 rounded-2xl"
                      >
                        <FiShoppingCart className="w-4 h-4 mr-2" />
                        {item.inStock ? 'Ajouter au panier' : 'Non disponible'}
                      </Button>

                      <div className="flex space-x-2">
                        <Link href={`/products?category=${item.category}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full rounded-xl">
                            Voir similaires
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemoveFromWishlist(item.id)}
                          className="text-red-600 border-red-200 hover:bg-red-50 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-900/20 rounded-xl"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        {wishlistItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white rounded-3xl overflow-hidden max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Prêt à finaliser vos achats ?
                </h3>
                <p className="text-blue-100 mb-6">
                  Ajoutez vos produits favoris au panier et profitez de nos offres exceptionnelles
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => {
                      wishlistItems.forEach(item => {
                        if (item.inStock) {
                          handleAddToCart(item);
                        }
                      });
                    }}
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl"
                  >
                    <FiShoppingCart className="w-4 h-4 mr-2" />
                    Tout ajouter au panier
                  </Button>
                  <Link href="/panier">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-xl">
                      Voir mon panier
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
