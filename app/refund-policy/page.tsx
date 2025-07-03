"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RefreshCw, Clock, CheckCircle, XCircle, CreditCard, AlertTriangle, Mail } from "lucide-react";

export default function RefundPolicyPage() {
  const refundSteps = [
    {
      step: 1,
      title: "Demande de retour",
      description: "Connectez-vous à votre compte et demandez un retour dans les 14 jours",
      icon: RefreshCw
    },
    {
      step: 2,
      title: "Emballage",
      description: "Remettez le produit dans son emballage d'origine avec tous les accessoires",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Expédition",
      description: "Utilisez l'étiquette de retour fournie ou votre propre transporteur",
      icon: Clock
    },
    {
      step: 4,
      title: "Remboursement",
      description: "Recevez votre remboursement sous 14 jours après réception du produit",
      icon: CreditCard
    }
  ];

  const eligibleProducts = [
    "Tous les produits électroniques neufs",
    "Accessoires dans leur emballage d'origine",
    "Logiciels non activés",
    "Produits défectueux ou endommagés",
    "Produits ne correspondant pas à la description"
  ];

  const nonEligibleProducts = [
    "Produits personnalisés ou sur mesure",
    "Logiciels téléchargés et activés",
    "Produits d'hygiène descellés",
    "Produits endommagés par l'utilisateur",
    "Produits retournés après 14 jours"
  ];

  const sections = [
    {
      id: "overview",
      title: "Vue d'ensemble",
      icon: RefreshCw,
      content: `
        Chez TechStore, votre satisfaction est notre priorité. Nous offrons une politique de remboursement claire et équitable qui respecte vos droits de consommateur tout en protégeant nos intérêts commerciaux légitimes.
        
        **Principe général :** Vous avez 14 jours pour retourner un produit et obtenir un remboursement complet, sans avoir à justifier votre décision.
        
        **Remboursement garanti :** Tous les remboursements sont traités rapidement et efficacement selon les modalités décrites ci-dessous.
      `
    },
    {
      id: "conditions",
      title: "Conditions de remboursement",
      icon: CheckCircle,
      content: `
        **Délai de retour :** 14 jours calendaires à compter de la réception du produit.
        
        **État du produit :** Le produit doit être dans son état d'origine, non utilisé, avec tous les accessoires, manuels et emballages d'origine.
        
        **Preuve d'achat :** Vous devez fournir la facture ou la confirmation de commande.
        
        **Produits éligibles :** La plupart de nos produits sont éligibles au remboursement, sauf exceptions mentionnées dans cette politique.
        
        **Frais de retour :** À votre charge, sauf si le produit est défectueux ou si nous avons commis une erreur.
      `
    },
    {
      id: "process",
      title: "Processus de remboursement",
      icon: Clock,
      content: `
        **1. Demande de retour**
        • Connectez-vous à votre compte sur techstore.com
        • Accédez à "Mes commandes"
        • Sélectionnez le produit à retourner
        • Indiquez la raison du retour
        • Recevez un numéro de retour (RMA)
        
        **2. Préparation du colis**
        • Remettez le produit dans son emballage d'origine
        • Incluez tous les accessoires et documentation
        • Joignez une copie de la facture
        • Utilisez l'étiquette de retour fournie si applicable
        
        **3. Expédition**
        • Expédiez le colis vers notre centre de retour
        • Conservez le numéro de suivi
        • Nous vous confirmons la réception par email
        
        **4. Inspection et traitement**
        • Inspection du produit retourné (1-3 jours ouvrés)
        • Validation du remboursement
        • Traitement du remboursement (3-10 jours ouvrés)
      `
    },
    {
      id: "timeframes",
      title: "Délais de remboursement",
      icon: Clock,
      content: `
        **Carte de crédit/débit :** 3-5 jours ouvrés après validation du retour
        **PayPal :** 3-5 jours ouvrés après validation du retour
        **Apple Pay/Google Pay :** 3-5 jours ouvrés après validation du retour
        **Virement bancaire :** 5-7 jours ouvrés après validation du retour
        **Portefeuille TechStore :** Immédiat après validation du retour
        
        **Note :** Les délais peuvent varier selon votre banque. Le remboursement peut prendre jusqu'à 2 cycles de facturation pour apparaître sur votre relevé.
        
        **Remboursement partiel :** En cas de produit endommagé ou incomplet, un remboursement partiel peut être appliqué après évaluation.
      `
    },
    {
      id: "shipping-costs",
      title: "Frais de livraison",
      icon: CreditCard,
      content: `
        **Frais de livraison initiaux :**
        • Remboursés si le produit est défectueux
        • Remboursés si nous avons commis une erreur
        • Non remboursés pour les retours de convenance
        • Remboursés si vous avez bénéficié de la livraison gratuite
        
        **Frais de retour :**
        • À votre charge pour les retours de convenance
        • À notre charge si le produit est défectueux
        • À notre charge si nous avons commis une erreur
        
        **Livraison gratuite :**
        Si vous avez bénéficié de la livraison gratuite et que le montant restant après retour est inférieur au seuil de gratuité, les frais de livraison initiaux seront déduits du remboursement.
      `
    },
    {
      id: "exchanges",
      title: "Échanges",
      icon: RefreshCw,
      content: `
        **Échange standard :**
        • Même produit, couleur ou taille différente
        • Gratuit si la valeur est identique
        • Différence de prix à régler si applicable
        • Traité comme un retour + nouvelle commande
        
        **Échange express :**
        • Disponible pour certains produits en stock
        • Expédition immédiate du produit de remplacement
        • Vous avez 14 jours pour retourner l'original
        • Frais supplémentaires si non-retour
        
        **Produits défectueux :**
        • Échange immédiat sans frais
        • Prise en charge des frais de livraison
        • Produit de remplacement expédié en priorité
        • Garantie prolongée si applicable
      `
    },
    {
      id: "special-cases",
      title: "Cas particuliers",
      icon: AlertTriangle,
      content: `
        **Produits en promotion :**
        • Remboursement au prix payé
        • Mêmes conditions que les produits à prix normal
        • Codes promo non réutilisables
        
        **Produits groupés/packs :**
        • Retour du pack complet requis
        • Remboursement du prix du pack
        • Retour partiel non autorisé
        
        **Cartes cadeaux :**
        • Non remboursables en espèces
        • Échange contre une nouvelle carte possible
        • Valeur conservée sur votre compte
        
        **Commandes multiples :**
        • Remboursement séparé par produit
        • Frais de livraison recalculés au prorata
        • Chaque produit suit sa propre procédure
        
        **Commandes professionnelles :**
        • Mêmes conditions pour les TPE/PME
        • Procédure spécifique pour les grandes entreprises
        • Factures de crédit émises si nécessaire
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Politique de Remboursement
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos conditions de retour et de remboursement conçues pour votre tranquillité d'esprit
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Dernière mise à jour : 1er janvier 2025
          </div>
        </motion.div>

        {/* Quick Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Processus en 4 étapes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {refundSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.step} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Eligible vs Non-eligible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-green-900">Produits éligibles</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {eligibleProducts.map((product, index) => (
                    <li key={index} className="flex items-center gap-2 text-green-800">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      {product}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-red-900">Produits non éligibles</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {nonEligibleProducts.map((product, index) => (
                    <li key={index} className="flex items-center gap-2 text-red-800">
                      <XCircle className="w-4 h-4 text-red-600" />
                      {product}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="mb-8"
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <Separator />
                  <CardContent className="pt-6">
                    <div className="prose max-w-none">
                      {section.content.split('\n').map((paragraph, pIndex) => {
                        if (paragraph.trim() === '') return null;
                        
                        if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith(':**')) {
                          return (
                            <h4 key={pIndex} className="font-semibold text-gray-900 mt-4 mb-2">
                              {paragraph.trim().replace(/\*\*/g, '').replace(':', '')}
                            </h4>
                          );
                        }
                        
                        if (paragraph.trim().startsWith('•')) {
                          return (
                            <li key={pIndex} className="text-gray-700 ml-4 mb-1">
                              {paragraph.trim().substring(1).trim()}
                            </li>
                          );
                        }
                        
                        return (
                          <p key={pIndex} className="text-gray-700 mb-3 leading-relaxed">
                            {paragraph.trim()}
                          </p>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Besoin d'aide pour un retour ?
              </h3>
              <p className="text-green-100 mb-6">
                Notre équipe est là pour vous accompagner dans votre processus de retour. Contactez-nous pour une assistance personnalisée.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a href="/contact">Demander un retour</a>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:retours@techstore.com">retours@techstore.com</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
