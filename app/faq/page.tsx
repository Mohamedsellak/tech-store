"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Paiements
  {
    id: "payment-1",
    question: "Quels modes de paiement acceptez-vous ?",
    answer: "Nous acceptons les cartes de crédit (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay et les virements bancaires. Tous les paiements sont sécurisés avec le chiffrement SSL.",
    category: "Paiements"
  },
  {
    id: "payment-2",
    question: "Mon paiement est-il sécurisé ?",
    answer: "Oui, absolument. Nous utilisons des protocoles de sécurité avancés (SSL 256 bits) et nous ne stockons jamais vos informations de carte de crédit. Nos partenaires de paiement sont certifiés PCI DSS.",
    category: "Paiements"
  },
  {
    id: "payment-3",
    question: "Puis-je payer en plusieurs fois ?",
    answer: "Oui, nous proposons le paiement en 3 ou 4 fois sans frais pour les commandes supérieures à 100€. Cette option est disponible avec nos partenaires Klarna et Alma.",
    category: "Paiements"
  },
  {
    id: "payment-4",
    question: "Que faire si ma carte est refusée ?",
    answer: "Vérifiez que vous avez saisi les bonnes informations, que votre carte n'est pas expirée et que vous avez suffisamment de fonds. Vous pouvez aussi essayer un autre mode de paiement ou contacter votre banque.",
    category: "Paiements"
  },

  // Livraison
  {
    id: "delivery-1",
    question: "Quels sont les délais de livraison ?",
    answer: "Livraison standard : 3-5 jours ouvrés. Livraison express : 24-48h. Livraison internationale : 5-10 jours ouvrés. Les produits en stock sont expédiés le jour même si commande avant 15h.",
    category: "Livraison"
  },
  {
    id: "delivery-2",
    question: "Combien coûte la livraison ?",
    answer: "Livraison gratuite pour les commandes de plus de 50€. Sinon 4,99€ en point relais, 6,99€ à domicile. Livraison express : 9,99€. Livraison internationale : à partir de 15€.",
    category: "Livraison"
  },
  {
    id: "delivery-3",
    question: "Comment suivre ma commande ?",
    answer: "Vous recevrez un email avec un numéro de suivi dès l'expédition. Vous pouvez suivre votre colis sur notre site ou directement chez le transporteur (Colissimo, Chronopost, UPS).",
    category: "Livraison"
  },
  {
    id: "delivery-4",
    question: "Livrez-vous partout en France ?",
    answer: "Oui, nous livrons en France métropolitaine et dans les DOM-TOM. Nous proposons aussi la livraison internationale dans plus de 30 pays.",
    category: "Livraison"
  },

  // Retours
  {
    id: "returns-1",
    question: "Puis-je retourner un produit ?",
    answer: "Oui, vous avez 14 jours pour retourner un produit non utilisé dans son emballage d'origine. Les frais de retour sont à votre charge sauf si le produit est défectueux.",
    category: "Retours"
  },
  {
    id: "returns-2",
    question: "Comment procéder à un retour ?",
    answer: "Connectez-vous à votre compte, accédez à 'Mes commandes', sélectionnez le produit à retourner et suivez les instructions. Vous recevrez une étiquette de retour prépayée.",
    category: "Retours"
  },
  {
    id: "returns-3",
    question: "Quand serai-je remboursé ?",
    answer: "Le remboursement est effectué sous 14 jours après réception du produit retourné. Le délai peut varier selon votre mode de paiement (3-5 jours pour CB, 5-7 jours pour PayPal).",
    category: "Retours"
  },
  {
    id: "returns-4",
    question: "Puis-je échanger un produit ?",
    answer: "Oui, vous pouvez échanger un produit contre un autre modèle, taille ou couleur. L'échange est gratuit si la valeur est identique, sinon nous ajustons la différence.",
    category: "Retours"
  },

  // Garanties
  {
    id: "warranty-1",
    question: "Quelle est la garantie sur les produits ?",
    answer: "Tous nos produits bénéficient de la garantie légale de 2 ans. Certains produits ont une garantie constructeur étendue (3-5 ans selon les marques).",
    category: "Garanties"
  },
  {
    id: "warranty-2",
    question: "Comment faire jouer la garantie ?",
    answer: "Contactez notre service client avec votre numéro de commande et une description du problème. Nous vous guiderons dans la procédure (réparation, échange ou remboursement).",
    category: "Garanties"
  },
  {
    id: "warranty-3",
    question: "La garantie couvre-t-elle les dommages accidentels ?",
    answer: "La garantie standard couvre les défauts de fabrication. Pour les dommages accidentels, nous proposons une garantie étendue optionnelle lors de l'achat.",
    category: "Garanties"
  },
  {
    id: "warranty-4",
    question: "Puis-je prolonger la garantie ?",
    answer: "Oui, nous proposons des extensions de garantie de 1 à 3 ans supplémentaires selon les produits. Cette option est disponible jusqu'à 30 jours après l'achat.",
    category: "Garanties"
  }
];

const categories = ["Paiements", "Livraison", "Retours", "Garanties"];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Paiements");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Foire Aux Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions les plus fréquentes
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Catégories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* FAQ Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {activeCategory}
                </h2>
                
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader 
                        className="cursor-pointer"
                        onClick={() => toggleItem(faq.id)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg text-left">
                            {faq.question}
                          </CardTitle>
                          {expandedItems.includes(faq.id) ? (
                            <ChevronUp className="w-5 h-5 text-blue-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                      </CardHeader>
                      
                      {expandedItems.includes(faq.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Separator />
                          <CardContent className="pt-4">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </CardContent>
                        </motion.div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p className="text-blue-100 mb-6">
                Notre équipe de support est là pour vous aider. Contactez-nous et nous vous répondrons rapidement.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a href="/contact">Nous contacter</a>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <a href="mailto:support@techstore.com">Email direct</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
