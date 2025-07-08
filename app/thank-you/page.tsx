"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiMail, FiPackage, FiTruck, FiHome } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CartItem } from "@/lib/cart";

interface OrderData {
  items: CartItem[];
  total: number;
  shippingCost: number;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  orderDate: string;
}

function ThankYouContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderParam = searchParams.get('order');
  
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    if (!orderParam) {
      // Redirect to 404 or home if no order ID
      router.push('/');
      return;
    }
    
    try {
      // Try to parse as JSON (new cart checkout format)
      const parsedOrder = JSON.parse(decodeURIComponent(orderParam));
      setOrderData(parsedOrder);
      setOrderNumber(`TechStore-${Date.now()}`);
    } catch {
      // If parsing fails, treat as simple order number (legacy format)
      setOrderNumber(orderParam);
    }
  }, [orderParam, router]);

  const steps = [
    {
      icon: FiCheckCircle,
      title: "Commande confirmée",
      description: "Votre commande a été reçue et confirmée",
      status: "completed",
      time: "Maintenant"
    },
    {
      icon: FiMail,
      title: "Email de confirmation",
      description: "Email ou appel téléphonique de confirmation",
      status: "pending",
      time: "Dans quelques minutes"
    },
    {
      icon: FiPackage,
      title: "Préparation",
      description: "Votre commande est en cours de préparation",
      status: "pending",
      time: "1-2 jours ouvrés"
    },
    {
      icon: FiTruck,
      title: "Expédition",
      description: "Votre commande sera expédiée",
      status: "upcoming",
      time: "2-3 jours ouvrés"
    }
  ];

  // Don't render anything if no order ID (will redirect)
  if (!orderNumber) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.03)_60deg,transparent_120deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.02)_60deg,transparent_120deg)]"></div>
      
      <div className="container mx-auto px-4 py-16 pt-28 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
              className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FiCheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Commande confirmée ! 🎉
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
              Votre commande a été confirmée avec succès
            </p>
            
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl max-w-md mx-auto">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Numéro de commande
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    #{orderNumber}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Order Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl mb-8">
              <CardHeader>
                <CardTitle className="text-center">Suivi de votre commande</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start space-x-3 sm:space-x-4 relative"
                      >
                        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                          step.status === 'completed' 
                            ? 'bg-green-100 dark:bg-green-900' 
                            : step.status === 'pending' 
                            ? 'bg-blue-100 dark:bg-blue-900' 
                            : 'bg-gray-100 dark:bg-gray-700'
                        }`}>
                          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                            step.status === 'completed' 
                              ? 'text-green-600 dark:text-green-400' 
                              : step.status === 'pending' 
                              ? 'text-blue-600 dark:text-blue-400' 
                              : 'text-gray-400'
                          }`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                              {step.title}
                            </h3>
                            <Badge variant={
                              step.status === 'completed' ? 'default' :
                              step.status === 'pending' ? 'secondary' : 'outline'
                            } className="w-fit text-xs">
                              {step.status === 'completed' ? 'Terminé' :
                               step.status === 'pending' ? 'En cours' : 'À venir'}
                            </Badge>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1">
                            {step.description}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                            {step.time}
                          </p>
                        </div>
                        
                        {index < steps.length - 1 && (
                          <div className="absolute left-5 sm:left-6 top-10 sm:top-12 w-0.5 h-4 sm:h-6 bg-gray-200 dark:bg-gray-600" />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Order Details for Cart Orders */}
          {orderData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl mb-8">
                <CardHeader>
                  <CardTitle>Détails de la commande</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Customer Info */}
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Informations client
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Nom:</span> {orderData.customerInfo?.firstName} {orderData.customerInfo?.lastName}</p>
                        <p><span className="font-medium">Email:</span> {orderData.customerInfo?.email}</p>
                        <p><span className="font-medium">Téléphone:</span> {orderData.customerInfo?.phone}</p>
                      </div>
                    </div>

                    {/* Shipping Info */}
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Adresse de livraison
                      </h3>
                      <div className="space-y-1 text-sm">
                        <p>{orderData.customerInfo?.address}</p>
                        <p>{orderData.customerInfo?.city} {orderData.customerInfo?.postalCode}</p>
                        <p>{orderData.customerInfo?.country}</p>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Articles commandés
                    </h3>
                    <div className="space-y-3">
                      {orderData.items?.map((item: CartItem, index: number) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="relative w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 dark:text-white text-sm">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Quantité: {item.quantity}
                            </p>
                          </div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {(item.price * item.quantity).toLocaleString()} DH
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Total */}
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg text-gray-900 dark:text-white">
                          Total payé
                        </span>
                        <span className="font-bold text-lg text-blue-600">
                          {orderData.total?.toLocaleString()} DH
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Mode de paiement: {orderData.paymentMethod === 'cash' ? 'Paiement à la livraison' : 'Carte bancaire'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Important Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8"
          >
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FiMail className="w-5 h-5" />
                  <span>Email de confirmation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Un email de confirmation contenant tous les détails de votre commande 
                  a été envoyé à votre adresse email.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Si vous ne le trouvez pas, vérifiez votre dossier spam.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FiTruck className="w-5 h-5" />
                  <span>Livraison</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Votre commande sera livrée sous 3-5 jours ouvrés au Maroc. 
                  Vous recevrez un numéro de suivi dès l&apos;expédition.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Livraison rapide disponible ! 🚚
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl">
              <CardHeader>
                <CardTitle>Et maintenant ?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 sm:p-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FiMail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2">Vérifiez vos emails</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Vous allez recevoir une confirmation et les détails de livraison
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FiPackage className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-semibold mb-2">Préparation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Nous préparons soigneusement votre commande
                    </p>
                  </div>
                  
                  <div className="text-center p-3 sm:p-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FiTruck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-semibold mb-2">Livraison</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Réception de votre commande sous 3-5 jours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <FiHome className="w-5 h-5 mr-2" />
                Retour à l&apos;accueil
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Continuer mes achats
              </Button>
            </Link>
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Besoin d&apos;aide ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Notre équipe support est là pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                💬 Chat en direct
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                📧 contact@techstore.ma
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                📞 +212 5 22 12 34 56
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Chargement...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
