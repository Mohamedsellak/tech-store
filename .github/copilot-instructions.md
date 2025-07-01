<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# TechStore - Instructions pour GitHub Copilot

## Architecture du Projet

Ce projet est un site e-commerce moderne construit avec :
- **Next.js 15** avec App Router
- **TypeScript** pour le typage statique
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **React Icons** pour les icônes
- **shadcn/ui** pour les composants UI

## Structure des Pages

1. **`/` (Homepage)** : Slider animé, catégories, produits vedettes
2. **`/products` (Products)** : Liste avec filtres sidebar, modal produit
3. **`/checkout` (Checkout)** : Processus en 3 étapes
4. **`/thank-you` (Thank You)** : Confirmation avec suivi

## Guidelines de Développement

### Composants
- Utiliser les composants shadcn/ui (`Button`, `Card`, `Input`, etc.)
- Préférer la composition avec `CardHeader`, `CardContent`, `CardFooter`
- Utiliser `motion.div` pour les animations Framer Motion

### Styling
- Classes Tailwind CSS uniquement
- Responsive design avec `sm:`, `md:`, `lg:`, `xl:`
- Dark mode support avec `dark:`
- Gradients pour les éléments visuels

### Animations
- `initial`, `animate`, `transition` pour Framer Motion
- `whileHover`, `whileInView` pour les interactions
- Délais échelonnés avec `delay: index * 0.1`

### Icons
- React Icons avec préfixes : `Fi` (Feather), `Ai` (Ant Design), `Bs` (Bootstrap)
- Taille standard `w-4 h-4` pour les boutons, `w-5 h-5` pour les titres

### Data Flow
- État local avec `useState` pour les filtres et modals
- Props drilling pour les données produits
- Types TypeScript pour la sécurité

### Conventions de Nommage
- Français pour les labels utilisateur
- Anglais pour le code (variables, fonctions)
- PascalCase pour les composants
- camelCase pour les variables

### Responsive Design
- Mobile-first approach
- Grilles adaptatives : `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Navigation cachée sur mobile avec toggle
- Sidebar collapsible

### Couleurs et Thème
- Primaire : `blue-600` / `blue-500`
- Secondaire : `purple-600` / `green-600`
- Neutre : `gray-50` à `gray-900`
- États : `green-500` (succès), `red-500` (erreur), `yellow-500` (warning)

### Performance
- Lazy loading avec `whileInView`
- Optimisation des re-renders
- Memoization si nécessaire

## Patterns Spécifiques

### Product Card
```tsx
<Card className="hover:shadow-xl transition-all duration-300">
  <CardHeader className="p-0">
    {/* Image avec hover effects */}
  </CardHeader>
  <CardContent>
    {/* Info produit avec badges */}
  </CardContent>
  <CardFooter>
    {/* Bouton d'action */}
  </CardFooter>
</Card>
```

### Filter Sidebar
```tsx
<aside className="lg:w-80 sticky top-24">
  {/* Sections avec Separator */}
</aside>
```

### Modal Pattern
```tsx
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
    {/* Contenu modal */}
  </motion.div>
</div>
```

### Animation Pattern
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

Toujours privilégier la cohérence avec les patterns existants et l'expérience utilisateur fluide.
