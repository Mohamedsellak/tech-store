export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  quantity: number;
  inStock: boolean;
}

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  isNew: boolean;
  inStock: boolean;
  description: string;
}

// Mock cart and wishlist storage (in a real app, this would be in a global state or backend)
let cart: CartItem[] = [];
let wishlist: WishlistItem[] = [];

// Cart functions
export const getCart = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('tech-store-cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  }
  return cart;
};

import { Product } from './products';

export const addToCart = (product: Product, quantity: number = 1): void => {
  const productId = product.id.toString();
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category,
      brand: product.brand,
      quantity,
      inStock: product.inStock
    });
  }
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('tech-store-cart', JSON.stringify(cart));
  }
};

export const removeFromCart = (productId: string): void => {
  cart = cart.filter(item => item.id !== productId);
  if (typeof window !== 'undefined') {
    localStorage.setItem('tech-store-cart', JSON.stringify(cart));
  }
};

export const updateCartQuantity = (productId: string, quantity: number): void => {
  const item = cart.find(item => item.id === productId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      if (typeof window !== 'undefined') {
        localStorage.setItem('tech-store-cart', JSON.stringify(cart));
      }
    }
  }
};

export const getCartTotal = (): number => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getCartItemsCount = (): number => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export const clearCart = (): void => {
  cart = [];
  if (typeof window !== 'undefined') {
    localStorage.setItem('tech-store-cart', JSON.stringify(cart));
  }
};

// Wishlist functions
export const getWishlist = (): WishlistItem[] => {
  if (typeof window !== 'undefined') {
    const savedWishlist = localStorage.getItem('tech-store-wishlist');
    if (savedWishlist) {
      wishlist = JSON.parse(savedWishlist);
    }
  }
  return wishlist;
};

export const addToWishlist = (product: Product): void => {
  const productId = product.id.toString();
  const existingItem = wishlist.find(item => item.id === productId);
  
  if (!existingItem) {
    wishlist.push({
      id: productId,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category,
      brand: product.brand,
      rating: product.rating,
      isNew: product.isNew,
      inStock: product.inStock,
      description: product.description
    });
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('tech-store-wishlist', JSON.stringify(wishlist));
    }
  }
};

export const removeFromWishlist = (productId: string): void => {
  wishlist = wishlist.filter(item => item.id !== productId);
  if (typeof window !== 'undefined') {
    localStorage.setItem('tech-store-wishlist', JSON.stringify(wishlist));
  }
};

export const isInWishlist = (productId: string): boolean => {
  return wishlist.some(item => item.id === productId);
};

export const getWishlistItemsCount = (): number => {
  return wishlist.length;
};

export const addWishlistItemToCart = (item: WishlistItem, quantity: number = 1): void => {
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
      category: item.category,
      brand: item.brand,
      quantity,
      inStock: item.inStock
    });
  }
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('tech-store-cart', JSON.stringify(cart));
  }
};

export const addCartItemToWishlist = (item: CartItem): void => {
  const existingItem = wishlist.find(wishlistItem => wishlistItem.id === item.id);
  
  if (!existingItem) {
    wishlist.push({
      id: item.id,
      name: item.name,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
      category: item.category,
      brand: item.brand,
      rating: 4.5, // Default rating for cart items
      isNew: false, // Default value
      inStock: item.inStock,
      description: `${item.brand} ${item.name}` // Generated description
    });
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('tech-store-wishlist', JSON.stringify(wishlist));
    }
  }
};
