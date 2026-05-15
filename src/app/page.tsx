import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Reservation from "@/components/sections/Reservation";
import MapSection from "@/components/sections/MapSection";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Featured />
      <Menu />
      <Gallery />
      <About />
      <Testimonials />
      <Reservation />
      <MapSection />
      <Footer />
    </main>
  );
}
