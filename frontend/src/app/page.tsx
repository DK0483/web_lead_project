import Navbar from "../components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}