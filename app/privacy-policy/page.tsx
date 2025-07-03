"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Lock, Users, Mail, Phone } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: Shield,
      content: `
        TechStore s'engage à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services.
        
        En utilisant notre site, vous acceptez les pratiques décrites dans cette politique. Si vous n'êtes pas d'accord avec ces pratiques, veuillez ne pas utiliser notre site.
        
        Cette politique est effective à partir du 1er janvier 2025 et peut être mise à jour périodiquement.
      `
    },
    {
      id: "data-collection",
      title: "2. Données collectées",
      icon: Eye,
      content: `
        **Informations que vous nous fournissez :**
        • Informations de compte (nom, prénom, email, mot de passe)
        • Informations de livraison et de facturation
        • Historique de commandes et préférences
        • Communications avec notre service client
        • Avis et commentaires sur les produits
        
        **Informations collectées automatiquement :**
        • Adresse IP et données de localisation
        • Type de navigateur et système d'exploitation
        • Pages visitées et temps passé sur le site
        • Données de cookies et technologies similaires
        • Informations sur les appareils utilisés
        
        **Informations de tiers :**
        • Données des réseaux sociaux (si vous vous connectez via Facebook/Google)
        • Informations de nos partenaires de paiement
        • Données d'analyse web anonymisées
      `
    },
    {
      id: "data-usage",
      title: "3. Utilisation des données",
      icon: Users,
      content: `
        Nous utilisons vos données personnelles pour :
        
        **Services essentiels :**
        • Traiter et expédier vos commandes
        • Gérer votre compte client
        • Fournir un support client
        • Traiter les paiements et remboursements
        
        **Amélioration de l'expérience :**
        • Personnaliser votre expérience d'achat
        • Recommander des produits pertinents
        • Améliorer nos services et notre site web
        • Analyser les tendances d'utilisation
        
        **Communication :**
        • Envoyer des confirmations de commande
        • Informer sur le statut de livraison
        • Envoyer notre newsletter (avec votre consentement)
        • Communiquer sur nos promotions et nouveautés
        
        **Obligations légales :**
        • Respecter nos obligations fiscales et comptables
        • Répondre aux demandes des autorités compétentes
        • Prévenir la fraude et garantir la sécurité
      `
    },
    {
      id: "data-protection",
      title: "4. Protection des données",
      icon: Lock,
      content: `
        **Sécurité technique :**
        • Chiffrement SSL/TLS pour toutes les transmissions
        • Serveurs sécurisés avec pare-feu avancés
        • Sauvegarde régulière et chiffrée des données
        • Tests de sécurité réguliers
        
        **Sécurité organisationnelle :**
        • Accès limité aux données sur la base du "besoin de savoir"
        • Formation régulière du personnel sur la protection des données
        • Procédures strictes de gestion des incidents
        • Audits de sécurité réguliers
        
        **Partenaires et sous-traitants :**
        • Sélection rigoureuse basée sur leur niveau de sécurité
        • Contrats de traitement des données conformes au RGPD
        • Audits réguliers de leurs pratiques de sécurité
        • Transferts de données sécurisés uniquement
        
        **Conservation des données :**
        • Données de compte : conservées tant que le compte est actif
        • Données de commande : 10 ans pour les obligations comptables
        • Données marketing : jusqu'à désabonnement
        • Données de navigation : 13 mois maximum
      `
    },
    {
      id: "cookies",
      title: "5. Cookies et technologies similaires",
      icon: Eye,
      content: `
        **Types de cookies utilisés :**
        
        **Cookies essentiels :**
        • Gestion du panier d'achat
        • Authentification et sécurité
        • Préférences de langue et région
        
        **Cookies de performance :**
        • Google Analytics (anonymisé)
        • Mesure de l'audience et du trafic
        • Optimisation des performances du site
        
        **Cookies de personnalisation :**
        • Recommandations produits
        • Préférences d'affichage
        • Historique de navigation
        
        **Cookies marketing :**
        • Publicité ciblée (avec votre consentement)
        • Remarketing sur les réseaux sociaux
        • Mesure de l'efficacité publicitaire
        
        **Gestion des cookies :**
        Vous pouvez gérer vos préférences de cookies via notre bandeau de consentement ou dans les paramètres de votre navigateur.
      `
    },
    {
      id: "rights",
      title: "6. Vos droits",
      icon: Shield,
      content: `
        Conformément au RGPD, vous disposez des droits suivants :
        
        **Droit d'accès :** Obtenir une copie de vos données personnelles
        **Droit de rectification :** Corriger les données inexactes ou incomplètes
        **Droit à l'effacement :** Demander la suppression de vos données
        **Droit à la limitation :** Restreindre le traitement de vos données
        **Droit à la portabilité :** Récupérer vos données dans un format structuré
        **Droit d'opposition :** Vous opposer au traitement de vos données
        **Droit de retrait du consentement :** Retirer votre consentement à tout moment
        
        **Comment exercer vos droits :**
        • Via votre compte client dans la section "Mes données"
        • Par email à privacy@techstore.com
        • Par courrier à notre adresse légale
        • Via notre formulaire de contact
        
        Nous répondrons à votre demande dans un délai maximum de 30 jours.
      `
    },
    {
      id: "sharing",
      title: "7. Partage des données",
      icon: Users,
      content: `
        **Nous ne vendons jamais vos données personnelles.** Nous pouvons partager vos données uniquement dans les cas suivants :
        
        **Prestataires de services :**
        • Transporteurs pour la livraison
        • Prestataires de paiement sécurisé
        • Services d'hébergement et cloud
        • Outils d'analyse et de marketing (anonymisés)
        
        **Obligations légales :**
        • Autorités judiciaires ou administratives
        • Organismes de régulation
        • Prévention de la fraude
        
        **Transferts internationaux :**
        Certains de nos prestataires peuvent être situés hors de l'UE. Dans ce cas, nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types, décisions d'adéquation).
        
        **Fusion ou acquisition :**
        En cas de changement de contrôle de notre société, vos données pourraient être transférées au nouvel acquéreur sous réserve du respect de cette politique.
      `
    },
    {
      id: "contact",
      title: "8. Contact et réclamations",
      icon: Mail,
      content: `
        **Délégué à la Protection des Données (DPO) :**
        Email : dpo@techstore.com
        Adresse : TechStore - DPO, 123 Rue de la Technologie, 75001 Paris
        
        **Service client :**
        Email : privacy@techstore.com
        Téléphone : 01 23 45 67 89
        Horaires : Lundi-Vendredi 9h-18h
        
        **Autorité de contrôle :**
        Si vous n'êtes pas satisfait de notre réponse, vous pouvez introduire une réclamation auprès de la CNIL :
        
        Commission Nationale de l'Informatique et des Libertés
        3 Place de Fontenoy - TSA 80715
        75334 PARIS CEDEX 07
        Téléphone : 01 53 73 22 22
        Site web : www.cnil.fr
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Dernière mise à jour : 1er janvier 2025
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Des questions sur vos données ?
              </h3>
              <p className="text-blue-100 mb-6">
                Notre équipe est à votre disposition pour répondre à toutes vos questions concernant vos données personnelles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:privacy@techstore.com"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  privacy@techstore.com
                </a>
                <a 
                  href="tel:0123456789"
                  className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  01 23 45 67 89
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
