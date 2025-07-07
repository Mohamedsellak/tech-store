"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiShoppingCart, FiMapPin, FiUser, FiCheck, FiArrowLeft, FiCreditCard } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCart, clearCart, getCartTotal, getCartItemsCount } from "@/lib/cart";
import { villes,Ville} from "@/lib/villes";
import Image from "next/image";

export default function CartCheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);

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

  useEffect(() => {
    const items = getCart();
    setCartItems(items);
    setTotalPrice(getCartTotal());
    setItemCount(getCartItemsCount());

    // If cart is empty, redirect to cart page
    if (items.length === 0) {
      router.push('/panier');
    }
  }, [router]);

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

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart after successful order
    clearCart();
    
    // Redirect to thank you page with order details
    const orderData = {
      items: cartItems,
      total: totalPrice + shippingCost,
      subtotal: totalPrice,
      shippingCost: shippingCost,
      customer: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
      },
      shipping: {
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        country: formData.country,
      },
      payment: formData.paymentMethod,
    };
    
    router.push(`/thank-you?order=${encodeURIComponent(JSON.stringify(orderData))}`);
  };

  const steps = [
    { number: 1, title: "Informations personnelles", icon: FiUser },
    { number: 2, title: "Adresse de livraison", icon: FiMapPin },
    { number: 3, title: "Paiement", icon: FiCreditCard },
  ];

  const shippingCost = 30; // Fixed shipping cost in MAD

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Votre panier est vide
          </h1>
          <Link href="/panier">
            <Button>Retour au panier</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.03)_60deg,transparent_120deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.02)_60deg,transparent_120deg)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link href="/panier" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Retour au panier
          </Link>
          <motion.h1 
            className="text-3xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Finaliser la commande
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {itemCount} article{itemCount > 1 ? 's' : ''} dans votre panier
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-400 dark:bg-gray-800 dark:border-gray-600'
                }`}>
                  {currentStep > step.number ? (
                    <FiCheck className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium hidden md:block ${
                  currentStep >= step.number 
                    ? 'text-blue-600' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {step.title}
                </span>
                {step.number < steps.length && (
                  <div className={`hidden md:block w-16 h-0.5 ml-4 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {React.createElement(steps[currentStep - 1].icon, { className: "w-5 h-5 mr-2" })}
                  {steps[currentStep - 1].title}
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
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
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
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+212 6XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
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
                  >
                    <div>
                      <Label htmlFor="address">Adresse complète *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className={errors.address ? 'border-red-500' : ''}
                        placeholder="Rue, numéro, quartier..."
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">Ville *</Label>
                        <Select onValueChange={(value) => handleInputChange('city', value)}>
                          <SelectTrigger className={errors.city ? 'border-red-500' : ''}>
                            <SelectValue placeholder="Sélectionnez une ville" />
                          </SelectTrigger>
                          <SelectContent>
                            {villes.map((ville) => (
                              <SelectItem key={ville.id} value={ville.ville}>
                                {ville.ville}
                              </SelectItem>
                            ))}
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
                          className={errors.postalCode ? 'border-red-500' : ''}
                          placeholder="12345"
                        />
                        {errors.postalCode && (
                          <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="country">Pays</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        disabled
                        className="bg-gray-50 dark:bg-gray-800"
                      />
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
                            <Label htmlFor="expiryDate">Date d'expiration *</Label>
                            <Input
                              id="expiryDate"
                              value={formData.expiryDate}
                              onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                              className={errors.expiryDate ? 'border-red-500' : ''}
                              placeholder="MM/YY"
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
                <div className="flex justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    Précédent
                  </Button>
                  {currentStep < 3 ? (
                    <Button onClick={nextStep}>
                      Suivant
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {isSubmitting ? 'Traitement...' : 'Finaliser la commande'}
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
                <CardTitle className="flex items-center">
                  <FiShoppingCart className="w-5 h-5 mr-2" />
                  Récapitulatif
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.color || 'default'}`} className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item.color && `Couleur: ${item.color}`}
                          {item.color && ' • '}
                          Qté: {item.quantity}
                        </p>
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {(item.price * item.quantity).toLocaleString()} DH
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Sous-total</span>
                    <span>{totalPrice.toLocaleString()} DH</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Livraison</span>
                    <span>{shippingCost.toLocaleString()} DH</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>{(totalPrice + shippingCost).toLocaleString()} DH</span>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                  <div className="flex items-center text-green-700 dark:text-green-300">
                    <FiCheck className="w-4 h-4 mr-2" />
                    <span className="text-sm">Paiement sécurisé</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
