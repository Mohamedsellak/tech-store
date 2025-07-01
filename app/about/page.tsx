"use client";

import { motion } from "framer-motion";
import { FiUsers, FiTarget, FiAward, FiTruck, FiShield, FiHeart, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { BsCpu, BsLightning, BsGlobe, BsPeople } from "react-icons/bs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const values = [
  {
    icon: <FiTarget className="w-8 h-8" />,
    title: "Excellence",
    description: "Nous sélectionnons uniquement les meilleurs produits technologiques pour nos clients exigeants."
  },
  {
    icon: <BsLightning className="w-8 h-8" />,
    title: "Innovation",
    description: "Toujours à la pointe de la technologie, nous proposons les dernières innovations du marché."
  },
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: "Passion",
    description: "Notre équipe partage une véritable passion pour la technologie et l'innovation."
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Confiance",
    description: "Nous construisons des relations durables basées sur la transparence et la qualité."
  }
];

const stats = [
  { number: "50k+", label: "Clients Satisfaits", icon: <FiUsers className="w-6 h-6" /> },
  { number: "1000+", label: "Produits Premium", icon: <BsCpu className="w-6 h-6" /> },
  { number: "15+", label: "Pays Desservis", icon: <BsGlobe className="w-6 h-6" /> },
  { number: "24/7", label: "Support Client", icon: <FiShield className="w-6 h-6" /> }
];

const team = [
  {
    name: "Alexandre Martin",
    role: "CEO & Fondateur",
    image: "👨‍💼",
    description: "Expert en technologie avec 15 ans d'expérience dans l'industrie tech."
  },
  {
    name: "Sophie Dubois",
    role: "Directrice Technique",
    image: "👩‍💻",
    description: "Ingénieure passionnée, spécialisée dans l'innovation et le développement produit."
  },
  {
    name: "Thomas Laurent",
    role: "Responsable Commercial",
    image: "👨‍💻",
    description: "Expert en relations client avec une approche centrée sur l'expérience utilisateur."
  },
  {
    name: "Marie Chen",
    role: "Design & UX",
    image: "👩‍🎨",
    description: "Designer créative qui façonne l'expérience digitale de nos clients."
  }
];

const milestones = [
  {
    year: "2018",
    title: "Création de TechStore",
    description: "Lancement de notre première boutique spécialisée en produits Apple premium."
  },
  {
    year: "2019",
    title: "Expansion Digital",
    description: "Ouverture de notre plateforme e-commerce avec livraison nationale."
  },
  {
    year: "2020",
    title: "Diversification",
    description: "Élargissement de notre catalogue avec les meilleures marques tech mondiales."
  },
  {
    year: "2022",
    title: "Innovation Service",
    description: "Lancement de nos services de support technique et formation produits."
  },
  {
    year: "2024",
    title: "Leadership Marché",
    description: "Reconnaissance comme leader dans la vente de produits tech premium en France."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-28 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.03)_60deg,transparent_120deg)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-8">
            <BsCpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider uppercase">
              À Propos de Nous
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
            Redéfinir l'Excellence
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Technologique
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Depuis 2018, TechStore s'impose comme la référence française pour les produits technologiques 
            premium. Notre mission : démocratiser l'accès aux innovations qui transforment notre quotidien.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl px-8">
                Nous Rencontrer
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="rounded-xl px-8">
                Découvrir Nos Produits
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ces principes guident chacune de nos décisions et façonnent l'expérience que nous offrons à nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez les étapes clés qui ont façonné TechStore et notre vision de l'avenir
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-12 gap-6`}
                >
                  <div className="lg:w-1/2 w-full">
                    <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl">
                      <CardContent className="p-8">
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-4">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg relative z-10"></div>
                  
                  <div className="lg:w-1/2 w-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Équipe Passionnée
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Rencontrez les experts qui donnent vie à la vision TechStore chaque jour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-6xl mb-6">{member.image}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-4">
                      {member.role}
                    </Badge>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <h3 className="text-4xl font-bold mb-8">
                Notre Mission
              </h3>
              <p className="text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-8">
                "Rendre la technologie premium accessible à tous, en offrant une expérience d'achat 
                exceptionnelle et un accompagnement personnalisé pour chaque client."
              </p>
              <div className="flex items-center justify-center space-x-8 text-blue-200">
                <div className="flex items-center space-x-2">
                  <FiTruck className="w-6 h-6" />
                  <span>Livraison Premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiShield className="w-6 h-6" />
                  <span>Garantie Étendue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiAward className="w-6 h-6" />
                  <span>Service Expert</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-center"
        >
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-xl rounded-3xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Rejoignez l'Aventure TechStore
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Vous partagez notre passion pour la technologie ? Découvrez nos opportunités 
                de carrière et rejoignez une équipe innovante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                    <FiMail className="w-5 h-5 mr-2" />
                    Nous Contacter
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="rounded-xl">
                  <BsPeople className="w-5 h-5 mr-2" />
                  Carrières
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
