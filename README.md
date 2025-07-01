# TechStore - Modern E-commerce Platform

Un site e-commerce moderne et puissant construit avec Next.js 15, TypeScript, Tailwind CSS, Framer Motion, React Icons et shadcn/ui.

## 🚀 Fonctionnalités

### ✨ Page d'accueil
- **Slider animé** avec transitions fluides et indicateurs
- **Grille de catégories** interactive avec animations hover
- **Produits vedettes** organisés par catégorie
- **Boutons "Afficher Plus"** pour chaque section
- **Section newsletter** avec gradient design
- **Footer complet** avec liens organisés

### 🛍️ Page Produits
- **Barre latérale de filtres moderne** avec :
  - Recherche en temps réel
  - Filtrage par catégorie
  - Filtrage par marque (checkboxes)
  - Slider de prix interactif
  - Tri avancé (nom, prix, note, nouveauté)
- **Grille de produits responsive** avec animations
- **Modal de détail produit** avec :
  - Images multiples
  - Informations complètes
  - Avis et notes
  - Bouton d'achat direct

### � Page Checkout
- **Processus en 3 étapes** avec indicateur de progression :
  1. Informations personnelles
  2. Adresse de livraison  
  3. Informations de paiement
- **Résumé de commande** en temps réel
- **Calcul automatique** des taxes et frais de livraison
- **Validation de formulaire** complète

### 🎉 Page de Remerciement
- **Animation de succès** avec confettis
- **Numéro de commande** généré automatiquement
- **Timeline de suivi** avec statuts
- **Informations de livraison**
- **Support client** intégré

## 🛠️ Technologies Utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique pour plus de robustesse
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides et transitions
- **React Icons** - Icônes modernes (Feather, Bootstrap, AI Icons)
- **shadcn/ui** - Composants UI modernes et accessibles  
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library for React
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library
- **[Recharts](https://recharts.org/)** - Composable charting library built on React components
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components built with Radix UI and Tailwind CSS
- **TypeScript** - Type-safe JavaScript

## ✨ Features

- **🎨 Beautiful UI**: Modern, responsive design with dark mode support
- **🎭 Smooth Animations**: Powered by Framer Motion for engaging user experience  
- **📊 Interactive Charts**: Real-time data visualization with Recharts
- **🛍️ Product Showcase**: E-commerce layout with product cards and shopping cart
- **🎯 Icon Integration**: Comprehensive use of React Icons across components
- **🧩 Component Library**: Pre-built shadcn/ui components for consistent design
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **⚡ Performance**: Optimized with Next.js 15 and Turbopack

## 🎯 What This Application Demonstrates

### 1. **Framer Motion Animations**
- Page entrance animations
- Hover effects on cards and buttons
- Staggered animations for product grids
- Smooth transitions between states

### 2. **React Icons Implementation**
- Shopping cart and wishlist icons
- Product category icons (laptops, tablets, smartphones)
- Rating stars and navigation icons
- Technology stack visual indicators

### 3. **Recharts Data Visualization**
- Interactive line charts for sales data
- Bar charts for revenue analysis
- Responsive chart containers
- Custom styling and tooltips

### 4. **shadcn/ui Components**
- Cards for product display
- Buttons with various variants
- Badges for product tags
- Navigation menus
- Input components
- Dialog and sheet modals

### 5. **Tailwind CSS Styling**
- Gradient backgrounds and text
- Dark mode support
- Responsive grid layouts
- Custom animations and transitions
- Component variants and states

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd tech-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
tech-store/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── ProductCard.tsx      # Product display component
│   ├── ChartCard.tsx        # Chart wrapper component
│   └── TechStackCard.tsx    # Technology showcase component
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🎨 Key Components

### ProductCard
Showcases individual products with:
- Framer Motion hover animations
- React Icons for categories and actions
- shadcn/ui Card, Badge, and Button components
- Tailwind CSS for responsive layout

### ChartCard  
Displays analytics data using:
- Recharts for interactive visualizations
- shadcn/ui Card components
- Responsive design patterns

### Navigation
Features:
- shadcn/ui Navigation Menu
- React Icons for menu items
- Framer Motion for brand animation

## 🚀 Deployment

The application is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Any platform supporting Node.js**

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 🎯 Learning Outcomes

This project demonstrates:

1. **Modern React Patterns**: App Router, Server Components, Client Components
2. **Animation Integration**: Smooth, performant animations with Framer Motion
3. **Icon Systems**: Comprehensive icon usage across the application
4. **Data Visualization**: Interactive charts with Recharts
5. **Design Systems**: Consistent UI with shadcn/ui components
6. **Responsive Design**: Mobile-first approach with Tailwind CSS
7. **TypeScript Integration**: Type-safe component development
8. **Performance Optimization**: Next.js best practices

## 📚 Further Reading

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons Gallery](https://react-icons.github.io/react-icons/)
- [Recharts Documentation](https://recharts.org/en-US/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js and modern web technologies**
