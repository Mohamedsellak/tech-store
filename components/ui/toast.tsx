"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheck, FiHeart, FiShoppingCart } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
  icon?: React.ReactNode;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    setToasts(prev => [...prev, newToast]);

    // Auto remove after duration
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 3000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

function ToastContainer({ toasts, removeToast }: { toasts: Toast[]; removeToast: (id: string) => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`
              bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 
              border border-gray-200/50 dark:border-gray-700/50 p-4 min-w-80 max-w-md
              ${toast.type === 'success' ? 'border-l-4 border-l-green-500' : ''}
              ${toast.type === 'error' ? 'border-l-4 border-l-red-500' : ''}
              ${toast.type === 'info' ? 'border-l-4 border-l-blue-500' : ''}
            `}
          >
            <div className="flex items-start space-x-3">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                ${toast.type === 'success' ? 'bg-green-100 dark:bg-green-900/30' : ''}
                ${toast.type === 'error' ? 'bg-red-100 dark:bg-red-900/30' : ''}
                ${toast.type === 'info' ? 'bg-blue-100 dark:bg-blue-900/30' : ''}
              `}>
                {toast.icon || (
                  <>
                    {toast.type === 'success' && <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400" />}
                    {toast.type === 'error' && <FiX className="w-5 h-5 text-red-600 dark:text-red-400" />}
                    {toast.type === 'info' && <FiShoppingCart className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                  </>
                )}
              </div>

              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {toast.title}
                </h4>
                {toast.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {toast.description}
                  </p>
                )}
              </div>

              <Button
                size="sm"
                variant="ghost"
                onClick={() => removeToast(toast.id)}
                className="w-6 h-6 p-0 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <FiX className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Helper functions for common toast types
export const showCartToast = (addToast: ToastContextType['addToast'], productName: string) => {
  addToast({
    type: 'success',
    title: 'Produit ajouté au panier',
    description: productName,
    icon: <FiShoppingCart className="w-5 h-5 text-green-600 dark:text-green-400" />,
    duration: 3000
  });
};

export const showWishlistToast = (addToast: ToastContextType['addToast'], productName: string, added: boolean) => {
  addToast({
    type: added ? 'success' : 'info',
    title: added ? 'Ajouté aux favoris' : 'Retiré des favoris',
    description: productName,
    icon: <FiHeart className={`w-5 h-5 ${added ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} />,
    duration: 2000
  });
};
