import Navbar from "../components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";         // 1. Import CTA
import Footer from "@/components/sections/Footer";   // 2. Import Footer

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />      {/* 3. Add CTA here */}
      <Footer />   {/* 4. Add Footer here */}
    </main>
  );
}