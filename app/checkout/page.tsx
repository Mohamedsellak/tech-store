"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiMapPin, FiUser, FiCreditCard } from "react-icons/fi";
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
import { villes } from "@/lib/villes";
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
    country: "Maroc",
    
    // Payment Information
    paymentMethod: "cash",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Produit non trouvé
          </h1>
          <div className="space-y-4">
            <Link href="/products">
              <Button>Retour aux produits</Button>
            </Link>
            <div className="flex space-x-4 justify-center">
              <Link href="/panier">
                <Button variant="outline">Voir mon panier</Button>
              </Link>
              <Link href="/favoris">
                <Button variant="outline">Mes favoris</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis";
      if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
      if (!formData.email.trim()) {
        newErrors.email = "L'email est requis";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Format d'email invalide";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Le téléphone est requis";
      } else if (!/^(\+212|0)[5-7](\d{8})$/.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = "Format de téléphone marocain invalide (ex: +212612345678)";
      }
    }

    if (step === 2) {
      if (!formData.address.trim()) newErrors.address = "L'adresse est requise";
      if (!formData.city.trim()) newErrors.city = "La ville est requise";
      if (!formData.postalCode.trim()) {
        newErrors.postalCode = "Le code postal est requis";
      } else if (!/^\d{5}$/.test(formData.postalCode)) {
        newErrors.postalCode = "Le code postal doit contenir 5 chiffres";
      }
    }

    if (step === 3 && formData.paymentMethod === "card") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Le numéro de carte est requis";
      if (!formData.expiryDate.trim()) newErrors.expiryDate = "La date d'expiration est requise";
      if (!formData.cvv.trim()) newErrors.cvv = "Le CVV est requis";
      if (!formData.cardName.trim()) newErrors.cardName = "Le nom sur la carte est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    
    setIsSubmitting(true);
    
    // Generate order ID
    const orderId = 'TK' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to thank you page with order ID
    router.push(`/thank-you?order=${orderId}`);
  };

  const subtotal = product.price;
  const shipping = subtotal > 500 ? 0 : 50; // Free shipping over 500 MAD, otherwise 50 MAD
  const tax = subtotal * 0.2; // 20% TVA
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.03)_60deg,transparent_120deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.02)_60deg,transparent_120deg)]"></div>
      
      <div className="container mx-auto px-4 py-8 pt-28 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Finaliser la commande
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Complétez vos informations pour confirmer votre commande
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
                  <span className={`ml-2 font-medium hidden sm:block ${
                    currentStep >= step ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {label}
                  </span>
                  {step < 3 && (
                    <div className={`mx-4 h-0.5 w-8 sm:w-16 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {currentStep === 1 && <><FiUser className="w-5 h-5" /><span>Informations personnelles</span></>}
                    {currentStep === 2 && <><FiMapPin className="w-5 h-5" /><span>Adresse de livraison</span></>}
                    {currentStep === 3 && <><FiCreditCard className="w-5 h-5" /><span>Paiement</span></>}
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
                            className={errors.firstName ? 'border-red-500' : ''}
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName">Nom *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Dupont"
                            className={errors.lastName ? 'border-red-500' : ''}
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                          )}
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
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>                        <div>
                          <Label htmlFor="phone">Téléphone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+212 6 12 34 56 78"
                            className={errors.phone ? 'border-red-500' : ''}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                          )}
                        </div>
                    </motion.div>
                  )}

                  {/* Step 2: Shipping Address */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >                        <div>
                          <Label htmlFor="address">Adresse *</Label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            placeholder="123 Rue Mohammed V"
                            className={errors.address ? 'border-red-500' : ''}
                          />
                          {errors.address && (
                            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="country">Pays *</Label>
                          <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Maroc">Maroc</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-gray-500 mt-1">
                            Actuellement, nous livrons uniquement au Maroc
                          </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">Ville *</Label>
                            <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                              <SelectTrigger className={errors.city ? 'border-red-500' : ''}>
                                <SelectValue placeholder="Sélectionnez votre ville" />
                              </SelectTrigger>
                              <SelectContent className="max-h-60">
                                {villes
                                  .sort((a, b) => a.ville.localeCompare(b.ville))
                                  .map((ville) => (
                                    <SelectItem key={ville.id} value={ville.ville}>
                                      {ville.ville}
                                    </SelectItem>
                                  ))
                                }
                              </SelectContent>
                            </Select>
                            {errors.city && (
                              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="postalCode">Code postal *</Label>
                            <Input
                              id="postalCode"
                              value={formData.postalCode}
                              onChange={(e) => handleInputChange('postalCode', e.target.value)}
                              placeholder="20000"
                              className={errors.postalCode ? 'border-red-500' : ''}
                            />
                            {errors.postalCode && (
                              <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
                            )}
                          </div>
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
                        <Label>Méthode de paiement *</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          <div 
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                              formData.paymentMethod === 'cash' 
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' 
                                : 'border-gray-200 dark:border-gray-700'
                            }`}
                            onClick={() => handleInputChange('paymentMethod', 'cash')}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                formData.paymentMethod === 'cash' 
                                  ? 'border-blue-500 bg-blue-500' 
                                  : 'border-gray-300'
                              }`}>
                                {formData.paymentMethod === 'cash' && (
                                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium">Paiement à la livraison</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  Payez en espèces à la réception
                                </p>
                              </div>
                            </div>
                          </div>
                          <div 
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                              formData.paymentMethod === 'card' 
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' 
                                : 'border-gray-200 dark:border-gray-700'
                            }`}
                            onClick={() => handleInputChange('paymentMethod', 'card')}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                formData.paymentMethod === 'card' 
                                  ? 'border-blue-500 bg-blue-500' 
                                  : 'border-gray-300'
                              }`}>
                                {formData.paymentMethod === 'card' && (
                                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium">Carte bancaire</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  Visa, Mastercard
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {formData.paymentMethod === 'card' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="space-y-4 mt-4"
                        >
                          <div>
                            <Label htmlFor="cardName">Nom sur la carte *</Label>
                            <Input
                              id="cardName"
                              value={formData.cardName}
                              onChange={(e) => handleInputChange('cardName', e.target.value)}
                              className={errors.cardName ? 'border-red-500' : ''}
                              placeholder="Jean Dupont"
                            />
                            {errors.cardName && (
                              <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="cardNumber">Numéro de carte *</Label>
                            <Input
                              id="cardNumber"
                              value={formData.cardNumber}
                              onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                              className={errors.cardNumber ? 'border-red-500' : ''}
                              placeholder="1234 5678 9012 3456"
                            />
                            {errors.cardNumber && (
                              <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiryDate">Date d&apos;expiration *</Label>
                              <Input
                                id="expiryDate"
                                value={formData.expiryDate}
                                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                                className={errors.expiryDate ? 'border-red-500' : ''}
                                placeholder="MM/AA"
                              />
                              {errors.expiryDate && (
                                <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV *</Label>
                              <Input
                                id="cvv"
                                value={formData.cvv}
                                onChange={(e) => handleInputChange('cvv', e.target.value)}
                                className={errors.cvv ? 'border-red-500' : ''}
                                placeholder="123"
                              />
                              {errors.cvv && (
                                <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex flex-col sm:flex-row justify-between pt-6 gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                      disabled={currentStep === 1}
                      className="w-full sm:w-auto"
                    >
                      Précédent
                    </Button>
                    
                    {currentStep < 3 ? (
                      <Button onClick={handleNextStep} className="w-full sm:w-auto">
                        Suivant
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                      >
                        {isSubmitting ? "Traitement..." : "Finaliser la commande"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FiShoppingCart className="w-5 h-5" />
                    <span>Résumé de la commande</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Product */}
                  <div className="flex space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg overflow-hidden relative flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                        {product.brand} • {product.category}
                      </p>
                      {product.isNew && (
                        <span className="inline-block mt-1 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                          Nouveau
                        </span>
                      )}
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="font-bold text-lg">{product.price} MAD</span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            {product.originalPrice} MAD
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
                      <span>{subtotal.toFixed(2)} MAD</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Livraison</span>
                      <span className={shipping === 0 ? "text-green-600" : ""}>
                        {shipping === 0 ? "Gratuite" : `${shipping.toFixed(2)} MAD`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>TVA (20%)</span>
                      <span>{tax.toFixed(2)} MAD</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>{total.toFixed(2)} MAD</span>
                    </div>
                    {subtotal < 500 && (
                      <p className="text-xs text-gray-500 text-center">
                        Livraison gratuite pour les commandes de 500 MAD et plus
                      </p>
                    )}
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
