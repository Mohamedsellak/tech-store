import HeroSlider from "@/components/home/HeroSlider";
import FeaturesBar from "@/components/home/FeaturesBar";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import ProductsList from "@/components/home/ProductsList";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";

export default function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 relative overflow-hidden">
 
      {/* Hero Section */}
      <HeroSlider />

      {/* Features Bar */}
      <FeaturesBar />

      {/* Categories Grid */}
      <CategoriesGrid />

      {/* Featured Products */}
      <ProductsList />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
