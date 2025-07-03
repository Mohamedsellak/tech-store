"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, ShoppingCart, Shield, Scale, AlertTriangle, Phone } from "lucide-react";

export default function TermsConditionsPage() {
  const sections = [
    {
      id: "general",
      title: "1. Dispositions générales",
      icon: FileText,
      content: `
        **1.1 Présentation**
        TechStore SAS, société par actions simplifiée au capital de 100 000 €, immatriculée au RCS de Paris sous le numéro 123 456 789, dont le siège social est situé 123 Rue de la Technologie, 75001 Paris, France.
        
        **1.2 Acceptation des conditions**
        L'utilisation du site web techstore.com implique l'acceptation pleine et entière des présentes conditions générales de vente. Ces conditions prévalent sur toutes autres conditions figurant dans tout autre document, sauf dérogation préalable, expresse et écrite.
        
        **1.3 Modification des conditions**
        TechStore se réserve le droit de modifier les présentes conditions générales à tout moment. Les conditions applicables sont celles en vigueur à la date de la commande.
        
        **1.4 Langue du contrat**
        Les présentes conditions générales sont rédigées en langue française. En cas de traduction en une ou plusieurs langues étrangères, seul le texte français ferait foi en cas de litige.
      `
    },
    {
      id: "products",
      title: "2. Produits et services",
      icon: ShoppingCart,
      content: `
        **2.1 Description des produits**
        Les produits proposés sont conformes à la législation française en vigueur. Les photographies et textes illustrant les produits n'entrent pas dans le champ contractuel. Des erreurs ou omissions involontaires peuvent subsister dans la description des produits.
        
        **2.2 Disponibilité**
        Nos offres de produits et prix sont valables tant qu'ils sont visibles sur le site, dans la limite des stocks disponibles. En cas d'indisponibilité de produit après passation de votre commande, nous vous en informerons par mail dans les plus brefs délais.
        
        **2.3 Prix**
        Les prix de nos produits sont indiqués en euros toutes taxes comprises (TVA française en vigueur). Les prix peuvent être modifiés à tout moment, mais le produit sera facturé sur la base du tarif en vigueur au moment de la validation de la commande.
        
        **2.4 Frais de livraison**
        Les frais de livraison sont calculés en fonction du poids, volume et destination. Ils sont indiqués avant la validation de la commande. La livraison est gratuite pour les commandes supérieures à 50 € en France métropolitaine.
      `
    },
    {
      id: "orders",
      title: "3. Commandes et paiement",
      icon: Scale,
      content: `
        **3.1 Processus de commande**
        Pour passer commande, vous devez suivre le processus d'achat en ligne et confirmer votre commande en cliquant sur "Valider ma commande" après avoir pris connaissance du montant total à payer.
        
        **3.2 Confirmation de commande**
        Toute commande figurant sur le site Internet TechStore suppose l'adhésion aux présentes conditions générales. Toute confirmation de commande entraîne acceptation des prix et descriptions des produits disponibles à la vente.
        
        **3.3 Paiement**
        Le paiement s'effectue par carte bancaire, PayPal, Apple Pay, Google Pay ou virement bancaire. Les données de paiement sont échangées en mode crypté grâce au protocole SSL. Nous ne conservons aucune donnée bancaire sur nos serveurs.
        
        **3.4 Facturation**
        La facture est disponible dans votre espace client et envoyée par email lors de l'expédition de la commande. Pour les achats professionnels, veuillez nous communiquer votre numéro de TVA intracommunautaire.
        
        **3.5 Délai de paiement**
        Le paiement est exigible immédiatement à la commande. En cas de défaut de paiement, la commande sera annulée.
      `
    },
    {
      id: "delivery",
      title: "4. Livraison et réception",
      icon: ShoppingCart,
      content: `
        **4.1 Zones de livraison**
        Nous livrons en France métropolitaine, dans les DOM-TOM et dans l'Union Européenne. D'autres destinations peuvent être disponibles sur demande.
        
        **4.2 Délais de livraison**
        Les délais de livraison sont indiqués à titre indicatif et correspondent au temps de préparation et d'acheminement de la commande. Ils sont de 3 à 5 jours ouvrés pour la France métropolitaine.
        
        **4.3 Modalités de livraison**
        La livraison est effectuée à l'adresse indiquée lors de la commande. Il appartient au destinataire de vérifier l'état du colis à la réception et de formuler toutes réserves et réclamations qui apparaîtraient justifiées.
        
        **4.4 Transfert de propriété et des risques**
        Le transfert de propriété des produits au profit de l'acheteur ne sera réalisé qu'après encaissement effectif de l'intégralité du prix par TechStore. Le transfert des risques s'effectue au moment de la livraison.
        
        **4.5 Force majeure**
        TechStore ne saurait être tenue responsable de tout retard de livraison dû exclusivement à une indisponibilité du produit ou à un cas de force majeure habituellement reconnu par la jurisprudence française.
      `
    },
    {
      id: "returns",
      title: "5. Droit de rétractation et retours",
      icon: Shield,
      content: `
        **5.1 Droit de rétractation**
        Vous disposez d'un délai de 14 jours francs pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalité. Ce délai court à compter du jour de réception de votre commande.
        
        **5.2 Modalités de retour**
        Pour exercer ce droit, vous devez nous notifier votre décision au moyen d'une déclaration dénuée d'ambiguïté via votre espace client ou par email à retours@techstore.com.
        
        **5.3 Conditions de retour**
        Les produits doivent être retournés dans leur état d'origine, avec tous les accessoires, notices et emballages. Les produits endommagés, salis ou incomplets ne seront pas repris.
        
        **5.4 Frais de retour**
        Les frais de retour sont à votre charge, sauf si le produit est défectueux ou ne correspond pas à votre commande. Dans ce cas, nous prenons en charge tous les frais.
        
        **5.5 Remboursement**
        Nous vous rembourserons tous les paiements reçus de vous, y compris les frais de livraison, sans retard excessif et, en tout état de cause, au plus tard 14 jours à compter du jour où nous sommes informés de votre décision de rétractation.
        
        **5.6 Exceptions au droit de rétractation**
        Le droit de rétractation ne peut être exercé pour les produits personnalisés, les logiciels descellés ou les produits d'hygiène descellés.
      `
    },
    {
      id: "warranty",
      title: "6. Garanties",
      icon: Shield,
      content: `
        **6.1 Garantie légale de conformité**
        Tous nos produits bénéficient de la garantie légale de conformité (articles L.217-4 et suivants du Code de la consommation) et de la garantie des vices cachés (articles 1641 et suivants du Code civil).
        
        **6.2 Garantie commerciale**
        En plus des garanties légales, la plupart des produits bénéficient d'une garantie commerciale du fabricant dont les modalités sont précisées dans la documentation fournie avec le produit.
        
        **6.3 Mise en œuvre de la garantie**
        En cas de défaut de conformité, vous pouvez demander la réparation ou le remplacement du bien. Si la réparation et le remplacement sont impossibles, vous pouvez rendre le produit et vous faire restituer le prix ou garder le produit et vous faire rendre une partie du prix.
        
        **6.4 Procédure**
        Pour faire jouer la garantie, contactez notre service client en précisant le numéro de commande et la nature du défaut constaté. Nous vous indiquerons la procédure à suivre.
      `
    },
    {
      id: "liability",
      title: "7. Responsabilité",
      icon: AlertTriangle,
      content: `
        **7.1 Limitation de responsabilité**
        La responsabilité de TechStore ne saurait être engagée pour tous les inconvénients ou dommages inhérents à l'utilisation du réseau Internet, notamment une rupture de service, une intrusion extérieure ou la présence de virus informatiques.
        
        **7.2 Utilisation des produits**
        Il appartient à l'acheteur de vérifier l'adéquation du produit à ses besoins. Notre responsabilité est limitée à la valeur des produits vendus.
        
        **7.3 Dommages indirects**
        TechStore ne saurait être tenue responsable des dommages indirects tels que perte d'exploitation, perte de données, dommage commercial, perte de bénéfice, etc.
        
        **7.4 Cas d'exonération**
        TechStore est exonérée de toute responsabilité en cas de force majeure, fait du prince, grève, catastrophe naturelle ou tout autre événement échappant à son contrôle.
      `
    },
    {
      id: "intellectual-property",
      title: "8. Propriété intellectuelle",
      icon: Shield,
      content: `
        **8.1 Droits de TechStore**
        Tous les éléments du site TechStore sont et restent la propriété intellectuelle et exclusive de TechStore. Personne n'est autorisé à reproduire, exploiter, rediffuser, ou utiliser à quelque titre que ce soit, même partiellement, des éléments du site qu'ils soient logiciels, visuels ou sonores.
        
        **8.2 Marques et logos**
        Les marques, logos et signes distinctifs reproduits sur le site sont la propriété exclusive de leurs titulaires respectifs. Toute reproduction ou utilisation de ces éléments est strictement interdite sans autorisation préalable.
        
        **8.3 Contenu utilisateur**
        En publiant du contenu sur notre site (avis, commentaires), vous accordez à TechStore une licence non-exclusive, gratuite et mondiale d'utilisation de ce contenu à des fins commerciales et promotionnelles.
      `
    },
    {
      id: "personal-data",
      title: "9. Données personnelles",
      icon: Shield,
      content: `
        **9.1 Traitement des données**
        Les données personnelles collectées lors de la commande sont nécessaires au traitement de votre commande et à la gestion de la relation commerciale. Elles sont traitées conformément à notre Politique de Confidentialité.
        
        **9.2 Finalités**
        Vos données sont utilisées pour : traiter vos commandes, gérer votre compte client, vous envoyer des informations commerciales (avec votre accord), améliorer nos services.
        
        **9.3 Vos droits**
        Vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données vous concernant. Pour exercer ces droits, contactez-nous à privacy@techstore.com.
        
        **9.4 Conservation**
        Vos données sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées et dans le respect des obligations légales.
      `
    },
    {
      id: "applicable-law",
      title: "10. Droit applicable et litiges",
      icon: Scale,
      content: `
        **10.1 Droit applicable**
        Les présentes conditions générales sont soumises à l'application du droit français. Il en est ainsi pour les règles de fond comme pour les règles de forme.
        
        **10.2 Langue**
        Dans l'hypothèse d'une traduction des présentes conditions générales dans une ou plusieurs langues, la langue d'interprétation sera le français en cas de contradiction ou de contestation sur la signification d'un terme ou d'une disposition.
        
        **10.3 Médiation**
        En cas de litige, vous pouvez recourir à la médiation conventionnelle ou à tout autre mode alternatif de règlement des différends. Vous pouvez également recourir à la plateforme de règlement en ligne des litiges (RLL) : https://ec.europa.eu/consumers/odr/
        
        **10.4 Juridiction compétente**
        En cas d'échec des tentatives de résolution amiable, les tribunaux français seront seuls compétents pour connaître du litige. Pour les consommateurs, le tribunal compétent est celui du lieu de résidence du consommateur ou du lieu de livraison effective du produit.
        
        **10.5 Nullité partielle**
        Si une ou plusieurs stipulations des présentes conditions générales sont tenues pour non valides ou déclarées telles en application d'une loi, d'un règlement ou à la suite d'une décision définitive d'une juridiction compétente, les autres stipulations garderont toute leur force et leur portée.
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
            Conditions Générales de Vente
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les conditions qui régissent l'utilisation de notre site et l'achat de nos produits
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
                        
                        if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                          return (
                            <h4 key={pIndex} className="font-semibold text-gray-900 mt-4 mb-2">
                              {paragraph.trim().replace(/\*\*/g, '')}
                            </h4>
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
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Questions sur nos conditions ?
              </h3>
              <p className="text-blue-100 mb-6">
                Notre équipe juridique est disponible pour répondre à toutes vos questions concernant nos conditions générales.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Nous contacter
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
