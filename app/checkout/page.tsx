"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiCreditCard, FiMapPin, FiUser } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getProductById } from "@/lib/products";
import Image from "next/image";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get('product');
  const product = productId ? getProductById(parseInt(productId)) : null;

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Shipping Address
    address: "",
    city: "",
    postalCode: "",
    country: "France",
    
    // Payment
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Produit non trouvé
          </h1>
          <Link href="/products">
            <Button>Retour aux produits</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to thank you page
    router.push('/thank-you');
  };

  const subtotal = product.price;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.2; // 20% TVA
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 pt-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Finaliser la commande
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Complétez vos informations pour finaliser votre achat
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[
                { step: 1, label: "Informations", icon: FiUser },
                { step: 2, label: "Livraison", icon: FiMapPin },
                { step: 3, label: "Paiement", icon: FiCreditCard }
              ].map(({ step, label, icon: Icon }) => (
                <div key={step} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`ml-2 font-medium ${
                    currentStep >= step ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {label}
                  </span>
                  {step < 3 && (
                    <div className={`mx-4 h-0.5 w-16 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {currentStep === 1 && <><FiUser className="w-5 h-5" /><span>Informations personnelles</span></>}
                    {currentStep === 2 && <><FiMapPin className="w-5 h-5" /><span>Adresse de livraison</span></>}
                    {currentStep === 3 && <><FiCreditCard className="w-5 h-5" /><span>Informations de paiement</span></>}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">Prénom *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="Jean"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Nom *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Dupont"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="jean.dupont@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Shipping Address */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <Label htmlFor="address">Adresse *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="123 Rue de la Paix"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">Ville *</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            placeholder="Paris"
                          />
                        </div>
                        <div>
                          <Label htmlFor="postalCode">Code postal *</Label>
                          <Input
                            id="postalCode"
                            value={formData.postalCode}
                            onChange={(e) => handleInputChange('postalCode', e.target.value)}
                            placeholder="75001"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="country">Pays *</Label>
                        <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="France">France</SelectItem>
                            <SelectItem value="Belgique">Belgique</SelectItem>
                            <SelectItem value="Suisse">Suisse</SelectItem>
                            <SelectItem value="Luxembourg">Luxembourg</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Payment */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <Label htmlFor="cardName">Nom sur la carte *</Label>
                        <Input
                          id="cardName"
                          value={formData.cardName}
                          onChange={(e) => handleInputChange('cardName', e.target.value)}
                          placeholder="Jean Dupont"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">Numéro de carte *</Label>
                        <Input
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Date d&apos;expiration *</Label>
                          <Input
                            id="expiryDate"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            placeholder="MM/AA"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                      disabled={currentStep === 1}
                    >
                      Précédent
                    </Button>
                    
                    {currentStep < 3 ? (
                      <Button onClick={() => setCurrentStep(currentStep + 1)}>
                        Suivant
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {isSubmitting ? "Traitement..." : "Confirmer la commande"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FiShoppingCart className="w-5 h-5" />
                    <span>Résumé de la commande</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Product */}
                  <div className="flex space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg overflow-hidden relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {product.brand} • {product.category}
                      </p>
                      {product.isNew && (
                        <span className="inline-block mt-1 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                          Nouveau
                        </span>
                      )}
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="font-bold text-lg">{product.price}€</span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            {product.originalPrice}€
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Product Details */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">Détails du produit</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span>{product.rating}</span>
                        <span className="text-gray-500">({product.reviews} avis)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                          {product.inStock ? 'En stock' : 'Rupture de stock'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Pricing Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Sous-total</span>
                      <span>{subtotal.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Livraison</span>
                      <span className={shipping === 0 ? "text-green-600" : ""}>
                        {shipping === 0 ? "Gratuite" : `${shipping.toFixed(2)}€`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>TVA (20%)</span>
                      <span>{tax.toFixed(2)}€</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>{total.toFixed(2)}€</span>
                    </div>
                  </div>

                  {/* Security Badges */}
                  <div className="pt-4">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Paiement sécurisé</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Livraison suivie</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-28 pb-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Chargement...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
