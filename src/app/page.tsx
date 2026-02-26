import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Expertise from "@/components/sections/Expertise";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent selection:bg-brand-orange/30">
      <Navbar />

      <div className="sticky top-0 h-screen w-full z-0">
        <Hero />
      </div>

      <div className="relative z-10 bg-mine-shaft shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <Services />
        <Expertise />
        <Process />
        <Pricing />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}
