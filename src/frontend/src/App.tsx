import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <CategorySection />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}
