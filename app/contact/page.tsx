"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageCircle, FiSend, FiHelpCircle } from "react-icons/fi";
import { BsCpu, BsHeadphones, BsShield, BsLightning } from "react-icons/bs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const contactMethods = [
  {
    icon: <FiPhone className="w-8 h-8" />,
    title: "Téléphone",
    description: "Appelez-nous pour un support immédiat",
    value: "+33 1 23 45 67 89",
    action: "Appeler",
    availability: "Lun-Ven 9h-19h, Sam 9h-17h",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FiMail className="w-8 h-8" />,
    title: "Email",
    description: "Écrivez-nous pour toute question",
    value: "contact@techstore.fr",
    action: "Écrire",
    availability: "Réponse sous 24h",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <FiMessageCircle className="w-8 h-8" />,
    title: "Chat en Direct",
    description: "Discutez avec nos experts",
    value: "Chat disponible",
    action: "Démarrer",
    availability: "Lun-Ven 9h-18h",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <FiMapPin className="w-8 h-8" />,
    title: "Magasin",
    description: "Visitez notre showroom parisien",
    value: "123 Rue de la Tech, 75001 Paris",
    action: "Directions",
    availability: "Lun-Sam 10h-19h",
    gradient: "from-red-500 to-orange-500"
  }
];

const supportCategories = [
  {
    icon: <BsHeadphones className="w-6 h-6" />,
    title: "Support Technique",
    description: "Aide à l'installation et configuration"
  },
  {
    icon: <BsShield className="w-6 h-6" />,
    title: "Garanties & SAV",
    description: "Questions sur les garanties et réparations"
  },
  {
    icon: <BsCpu className="w-6 h-6" />,
    title: "Conseils Produits",
    description: "Recommandations et comparatifs"
  },
  {
    icon: <BsLightning className="w-6 h-6" />,
    title: "Commandes & Livraison",
    description: "Suivi de commande et informations de livraison"
  }
];

const faqItems = [
  {
    question: "Quels sont vos délais de livraison ?",
    answer: "Nous livrons en 24-48h en France métropolitaine. Livraison gratuite dès 50€ d'achat."
  },
  {
    question: "Proposez-vous une garantie étendue ?",
    answer: "Oui, tous nos produits bénéficient d'une garantie constructeur + 1 an offert par TechStore."
  },
  {
    question: "Puis-je retourner un produit ?",
    answer: "Vous disposez de 14 jours pour retourner tout produit non utilisé dans son emballage d'origine."
  },
  {
    question: "Offrez-vous un service d'installation ?",
    answer: "Oui, nos techniciens peuvent se déplacer pour l'installation de certains produits. Service payant."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-28 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.03)_60deg,transparent_120deg)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-8">
            <FiMessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider uppercase">
              Contactez-Nous
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
            Nous Sommes Là
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Pour Vous
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Notre équipe d&apos;experts est à votre disposition pour répondre à toutes vos questions
            et vous accompagner dans vos projets technologiques.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl overflow-hidden group">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-br ${method.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {method.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {method.value}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {method.availability}
                    </Badge>
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${method.gradient} hover:opacity-90 rounded-xl`}>
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <FiSend className="w-6 h-6" />
                  Envoyez-nous un Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Votre nom et prénom"
                        className="mt-1 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="votre.email@exemple.com"
                        className="mt-1 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+33 1 23 45 67 89"
                        className="mt-1 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Catégorie *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="mt-1 rounded-xl">
                          <SelectValue placeholder="Choisissez une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Support Technique</SelectItem>
                          <SelectItem value="warranty">Garanties & SAV</SelectItem>
                          <SelectItem value="advice">Conseils Produits</SelectItem>
                          <SelectItem value="order">Commandes & Livraison</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Sujet *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Résumé de votre demande"
                      className="mt-1 rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Décrivez votre demande en détail..."
                      rows={6}
                      className="mt-1 rounded-xl resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl py-3 text-lg">
                    <FiSend className="w-5 h-5 mr-2" />
                    Envoyer le Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Support Categories */}
            <Card className="shadow-xl border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FiHelpCircle className="w-5 h-5" />
                  Types de Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {category.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {category.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-xl border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FiClock className="w-5 h-5" />
                  Horaires d&apos;Ouverture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { day: "Lundi - Vendredi", hours: "9h00 - 19h00", status: "Ouvert" },
                  { day: "Samedi", hours: "10h00 - 17h00", status: "Ouvert" },
                  { day: "Dimanche", hours: "Fermé", status: "Fermé" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {schedule.day}
                    </span>
                    <div className="text-right">
                      <div className="text-gray-900 dark:text-white font-semibold">
                        {schedule.hours}
                      </div>
                      <Badge variant={schedule.status === "Ouvert" ? "default" : "secondary"} className="text-xs">
                        {schedule.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Besoin d&apos;une Aide Urgente ?</h3>
                <p className="text-blue-100 mb-6">
                  Notre chat en direct est disponible pour vous aider immédiatement.
                </p>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-xl">
                  <FiMessageCircle className="w-4 h-4 mr-2" />
                  Démarrer le Chat
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Questions Fréquemment Posées
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Trouvez rapidement des réponses aux questions les plus courantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <Card className="shadow-xl border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                <div className="text-center">
                  <FiMapPin className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Notre Showroom Parisien
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    123 Rue de la Tech, 75001 Paris
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                    Voir sur la Carte
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
