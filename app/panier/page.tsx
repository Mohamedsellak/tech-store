"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiArrowLeft, FiHeart } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { 
  getCart, 
  removeFromCart, 
  updateCartQuantity, 
  getCartTotal, 
  getCartItemsCount,
  clearCart,
  addToWishlist,
  CartItem 
} from "@/lib/cart";

export default function PanierPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCartItems(getCart());
    setIsLoading(false);
  }, []);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateCartQuantity(productId, newQuantity);
    setCartItems(getCart());
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    setCartItems(getCart());
  };

  const handleMoveToWishlist = (item: CartItem) => {
    addToWishlist(item);
    removeFromCart(item.id);
    setCartItems(getCart());
  };

  const handleClearCart = () => {
    clearCart();
    setCartItems([]);
  };

  const total = getCartTotal();
  const itemsCount = getCartItemsCount();
  const shipping = total >= 50 ? 0 : 9.99;
  const finalTotal = total + shipping;

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
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/products">
                <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <FiArrowLeft className="w-4 h-4 mr-2" />
                  Continuer mes achats
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Mon Panier
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {itemsCount > 0 ? `${itemsCount} article${itemsCount > 1 ? 's' : ''} dans votre panier` : 'Votre panier est vide'}
            </p>
          </div>
          
          {cartItems.length > 0 && (
            <Button
              variant="outline"
              onClick={handleClearCart}
              className="text-red-600 border-red-200 hover:bg-red-50 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-900/20"
            >
              <FiTrash2 className="w-4 h-4 mr-2" />
              Vider le panier
            </Button>
          )}
        </motion.div>

        {cartItems.length === 0 ? (
          // Empty Cart State
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <Card className="max-w-md mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl">
              <CardContent className="p-12">
                <div className="text-8xl mb-6">🛒</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Votre panier est vide
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Découvrez nos produits technologiques exceptionnels et ajoutez-les à votre panier
                </p>
                <div className="space-y-4">
                  <Link href="/products">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl">
                      Découvrir nos produits
                    </Button>
                  </Link>
                  <Link href="/favoris">
                    <Button variant="outline" className="w-full rounded-2xl">
                      <FiHeart className="w-4 h-4 mr-2" />
                      Voir mes favoris
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-lg rounded-3xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Product Image */}
                        <div className="relative w-full sm:w-32 h-32 bg-gray-50 dark:bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={120}
                            height={120}
                            className="object-contain w-full h-full p-2"
                          />
                          {!item.inStock && (
                            <div className="absolute inset-0 bg-red-500/20 backdrop-blur-sm flex items-center justify-center">
                              <Badge className="bg-red-500 text-white">
                                Rupture de stock
                              </Badge>
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                            <div className="flex-1">
                              <Badge variant="outline" className="mb-2">
                                {item.category}
                              </Badge>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                {item.name}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {item.brand}
                              </p>

                              {/* Quantity Controls */}
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 rounded-2xl p-1">
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                    className="w-8 h-8 rounded-xl"
                                  >
                                    <FiMinus className="w-4 h-4" />
                                  </Button>
                                  <span className="w-8 text-center font-medium text-gray-900 dark:text-white">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    disabled={!item.inStock}
                                    className="w-8 h-8 rounded-xl"
                                  >
                                    <FiPlus className="w-4 h-4" />
                                  </Button>
                                </div>

                                {/* Action Buttons */}
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleMoveToWishlist(item)}
                                  className="text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20"
                                >
                                  <FiHeart className="w-4 h-4 mr-2" />
                                  Favoris
                                </Button>

                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                                >
                                  <FiTrash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <div className="space-y-1">
                                {item.originalPrice && item.originalPrice > item.price && (
                                  <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
                                    {item.originalPrice}€
                                  </p>
                                )}
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                  {item.price}€
                                </p>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                Sous-total: {(item.price * item.quantity).toFixed(2)}€
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl sticky top-32">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Résumé de commande
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        Sous-total ({itemsCount} article{itemsCount > 1 ? 's' : ''})
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {total.toFixed(2)}€
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        Frais de livraison
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {shipping === 0 ? 'Gratuit' : `${shipping}€`}
                      </span>
                    </div>

                    {total < 50 && shipping > 0 && (
                      <div className="text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-2xl">
                        Ajoutez {(50 - total).toFixed(2)}€ de plus pour la livraison gratuite
                      </div>
                    )}

                    <Separator />

                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-gray-900 dark:text-white">Total</span>
                      <span className="text-gray-900 dark:text-white">
                        {finalTotal.toFixed(2)}€
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link href="/checkout/panier" className="block">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl py-6">
                        <FiShoppingBag className="w-5 h-5 mr-2" />
                        Procéder au paiement
                      </Button>
                    </Link>

                    <Link href="/products">
                      <Button variant="outline" className="w-full rounded-2xl">
                        Continuer mes achats
                      </Button>
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Paiement sécurisé</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Livraison rapide</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Retour gratuit 30 jours</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
