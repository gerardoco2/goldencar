import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
