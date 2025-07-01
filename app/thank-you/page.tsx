"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiMail, FiPackage, FiTruck, FiHome } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [orderNumber] = useState(() => 
    'TK' + Math.random().toString(36).substr(2, 9).toUpperCase()
  );

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
      description: "Un email de confirmation vous a été envoyé",
      status: "completed",
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 pt-28">
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
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Merci pour votre commande ! 🎉
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Votre commande a été confirmée avec succès
            </p>
            
            <Card className="max-w-md mx-auto">
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
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">Suivi de votre commande</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          step.status === 'completed' 
                            ? 'bg-green-100 dark:bg-green-900' 
                            : step.status === 'pending' 
                            ? 'bg-blue-100 dark:bg-blue-900' 
                            : 'bg-gray-100 dark:bg-gray-700'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            step.status === 'completed' 
                              ? 'text-green-600 dark:text-green-400' 
                              : step.status === 'pending' 
                              ? 'text-blue-600 dark:text-blue-400' 
                              : 'text-gray-400'
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {step.title}
                            </h3>
                            <Badge variant={
                              step.status === 'completed' ? 'default' :
                              step.status === 'pending' ? 'secondary' : 'outline'
                            }>
                              {step.status === 'completed' ? 'Terminé' :
                               step.status === 'pending' ? 'En cours' : 'À venir'}
                            </Badge>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {step.description}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                            {step.time}
                          </p>
                        </div>
                        
                        {index < steps.length - 1 && (
                          <div className="absolute left-6 mt-12 w-0.5 h-6 bg-gray-200 dark:bg-gray-600" />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Important Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            <Card>
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FiTruck className="w-5 h-5" />
                  <span>Livraison</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Votre commande sera livrée sous 3-5 jours ouvrés. 
                  Vous recevrez un numéro de suivi dès l'expédition.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Livraison gratuite incluse ! 🚚
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
            <Card>
              <CardHeader>
                <CardTitle>Et maintenant ?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
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
                  
                  <div className="text-center p-4">
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
                Retour à l'accueil
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
              Besoin d'aide ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Notre équipe support est là pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="sm">
                💬 Chat en direct
              </Button>
              <Button variant="outline" size="sm">
                📧 contact@techstore.com
              </Button>
              <Button variant="outline" size="sm">
                📞 +33 1 23 45 67 89
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
