"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiStar, FiHeart, FiArrowRight } from "react-icons/fi";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Featured products by category
const featuredProducts = {
  smartphones: [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1199,
      originalPrice: 1299,
      rating: 4.9,
      reviews: 234,
      image: "📱",
      category: "Smartphones",
      inStock: true,
      isNew: true
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 1099,
      originalPrice: 1199,
      rating: 4.8,
      reviews: 189,
      image: "📱",
      category: "Smartphones",
      inStock: true,
      isNew: false
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      price: 899,
      originalPrice: 999,
      rating: 4.7,
      reviews: 156,
      image: "📱",
      category: "Smartphones",
      inStock: false,
      isNew: false
    }
  ],
  laptops: [
    {
      id: 4,
      name: "MacBook Pro 16\" M3 Max",
      price: 2499,
      originalPrice: 2699,
      rating: 4.9,
      reviews: 127,
      image: "💻",
      category: "Laptops",
      inStock: true,
      isNew: true
    },
    {
      id: 5,
      name: "Dell XPS 15",
      price: 1899,
      originalPrice: 2099,
      rating: 4.6,
      reviews: 98,
      image: "💻",
      category: "Laptops",
      inStock: true,
      isNew: false
    },
    {
      id: 6,
      name: "ThinkPad X1 Carbon",
      price: 1599,
      originalPrice: 1799,
      rating: 4.7,
      reviews: 143,
      image: "💻",
      category: "Laptops",
      inStock: true,
      isNew: false
    }
  ],
  audio: [
    {
      id: 7,
      name: "AirPods Pro 2",
      price: 249,
      originalPrice: 279,
      rating: 4.8,
      reviews: 567,
      image: "🎧",
      category: "Audio",
      inStock: true,
      isNew: false
    },
    {
      id: 8,
      name: "Sony WH-1000XM5",
      price: 329,
      originalPrice: 399,
      rating: 4.9,
      reviews: 432,
      image: "🎧",
      category: "Audio",
      inStock: true,
      isNew: true
    },
    {
      id: 9,
      name: "Bose QuietComfort 45",
      price: 279,
      originalPrice: 329,
      rating: 4.6,
      reviews: 298,
      image: "🎧",
      category: "Audio",
      inStock: true,
      isNew: false
    }
  ]
};

export default function ProductsList() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        {Object.entries(featuredProducts).map(([categoryKey, products], categoryIndex) => (
          <div key={categoryKey} className="mb-16 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 capitalize">
                  {categoryKey === 'smartphones' ? 'Smartphones' : 
                   categoryKey === 'laptops' ? 'Ordinateurs Portables' : 
                   categoryKey === 'audio' ? 'Audio & Casques' : categoryKey}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Les meilleurs produits de cette catégorie
                </p>
              </div>
              <Link href="/products">
                <Button variant="outline" className="group">
                  Afficher Plus
                  <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardHeader className="p-0">
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                          {product.image}
                        </div>
                        <div className="absolute top-4 right-4 flex flex-col space-y-2">
                          {product.isNew && (
                            <Badge className="bg-green-500">Nouveau</Badge>
                          )}
                          {!product.inStock && (
                            <Badge variant="destructive">Rupture</Badge>
                          )}
                          {product.originalPrice > product.price && (
                            <Badge variant="secondary">Promo</Badge>
                          )}
                        </div>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <FiHeart className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{product.category}</Badge>
                        <div className="flex items-center space-x-1">
                          <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          {product.price}€
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through">
                            {product.originalPrice}€
                          </span>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button 
                        className="w-full" 
                        disabled={!product.inStock}
                        variant={product.inStock ? "default" : "secondary"}
                      >
                        <FiShoppingCart className="w-4 h-4 mr-2" />
                        {product.inStock ? "Ajouter au Panier" : "Me Notifier"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
