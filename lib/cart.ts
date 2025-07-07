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

export const addToCart = (product: any, quantity: number = 1): void => {
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

export const addToWishlist = (product: any): void => {
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
