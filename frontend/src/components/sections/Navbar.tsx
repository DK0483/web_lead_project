"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// --- Data for Modals ---
const testimonialsData = [
  {
    quote: "The flexibility of their AI models allowed us to scale our operations faster than we ever thought possible.",
    name: "Priya Sharma",
    title: "Founder, TechSolutions Pvt. Ltd.",
    avatar: "https://placehold.co/100x100/7E22CE/FFFFFF/png?text=PS",
    rating: 5.0,
  },
  {
    quote: "We were able to identify key inefficiencies within days of implementation. The platform is powerful yet intuitive.",
    name: "Rohan Mehta",
    title: "Director, Digital Ventures",
    avatar: "https://placehold.co/100x100/1D4ED8/FFFFFF/png?text=RM",
    rating: 5.0,
  },
];
const solutionsData = [
    { title: "For E-commerce", description: "Automate inventory management and personalize customer recommendations." },
    { title: "For Healthcare", description: "Streamline patient scheduling and leverage predictive analytics." },
    { title: "For Finance", description: "Enhance fraud detection and automate compliance reporting." },
    { title: "For Manufacturing", description: "Optimize production lines and predict maintenance needs." },
];
const featuresData = [
    { title: "Automated Task Management", description: "Eliminate manual work with intelligent automation that adapts to your workflows.", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Advanced Data Analysis", description: "Leverage AI-powered analytics to gain deep insights and make decisions with confidence.", iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    { title: "Seamless Integrations", description: "Connect Vincenzo AI to the tools you already use, from CRMs to databases.", iconPath: "M17 14v6m-3-3h6M3 10v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2z" },
    { title: "Predictive Insights", description: "Stay ahead of the curve with AI that anticipates future trends and customer needs.", iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0" },
];
const teamMembers = [
    { name: "Rohan Mehta", role: "Founder & CEO", avatar: "https://placehold.co/200x200/1D4ED8/FFFFFF/png?text=RM", bio: "Visionary leader with a passion for leveraging AI to solve complex business challenges." },
    { name: "Priya Sharma", role: "Chief Technology Officer", avatar: "https://placehold.co/200x200/7E22CE/FFFFFF/png?text=PS", bio: "Expert in machine learning and scalable systems, driving our platform's innovation." },
    { name: "Aarav Singh", role: "Head of Product", avatar: "https://placehold.co/200x200/16A34A/FFFFFF/png?text=AS", bio: "Dedicated to creating intuitive user experiences that deliver real value." },
];

// --- Reusable Components & Variants ---
const StarIcon = () => (<svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>);
const SolutionIcon = () => (<svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-6h3m-3 6h3M6 12H3m18 0h-3" /></svg>);
const FeatureIcon = ({ path }: { path: string }) => (<div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg mb-4"><svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} /></svg></div>);
const ArrowIcon = () => (<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const containerVariants: Variants = { onscreen: { opacity: 1, transition: { staggerChildren: 0.3 } }, offscreen: { opacity: 0 } };
const cardVariants: Variants = { offscreen: { y: 50, opacity: 0 }, onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } } };

// --- Main Navbar Component ---
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTestimonialsModalOpen, setIsTestimonialsModalOpen] = useState(false);
  const [isSolutionsModalOpen, setIsSolutionsModalOpen] = useState(false);
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false); // State for the new modal

  const closeModalAndMenu = (modalSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsMenuOpen(false);
    modalSetter(true);
  };

  return (
    <>
      <header className="w-full bg-gray-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between py-4 px-6 sm:px-8">
          <div className="flex-1">
            <Link href="/" className="flex items-center"><div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Vincenzo AI</div></Link>
          </div>
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
            <button onClick={() => setIsFeaturesModalOpen(true)} className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Features</button>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Pricing</Link>
            <button onClick={() => setIsSolutionsModalOpen(true)} className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Solutions</button>
            <button onClick={() => setIsTestimonialsModalOpen(true)} className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Testimonials</button>
            <button onClick={() => setIsAboutModalOpen(true)} className="text-gray-300 hover:text-white transition-colors font-medium text-sm">About Us</button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
            <Link href="/login"><button className="text-gray-300 hover:text-white font-semibold transition-colors text-sm">Login</button></Link>
            <Link href="/signup"><button className="flex items-center gap-2 bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"><span>Get Started</span><ArrowIcon /></button></Link>
          </div>
          <div className="lg:hidden"><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white" aria-label="Toggle menu"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg></button></div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/90 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => closeModalAndMenu(setIsFeaturesModalOpen)} className="block w-full py-2 text-center text-gray-300 hover:bg-gray-800 rounded transition-colors">Features</button>
              <Link href="/pricing" className="block py-2 text-center text-gray-300 hover:bg-gray-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              <button onClick={() => closeModalAndMenu(setIsSolutionsModalOpen)} className="block w-full py-2 text-center text-gray-300 hover:bg-gray-800 rounded transition-colors">Solutions</button>
              <button onClick={() => closeModalAndMenu(setIsTestimonialsModalOpen)} className="block w-full py-2 text-center text-gray-300 hover:bg-gray-800 rounded transition-colors">Testimonials</button>
              <button onClick={() => closeModalAndMenu(setIsAboutModalOpen)} className="block w-full py-2 text-center text-gray-300 hover:bg-gray-800 rounded transition-colors">About Us</button>
              <div className="mt-4 pt-4 border-t border-gray-800 flex flex-col sm:flex-row gap-2">
                <Link href="/login" className="w-full"><button className="w-full border border-gray-700 text-gray-300 rounded-full px-5 py-2 hover:bg-gray-800">Login</button></Link>
                <Link href="/signup" className="w-full"><button className="w-full bg-blue-600 text-white rounded-full px-5 py-2 hover:bg-blue-700">Get Started</button></Link>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Modals for Navbar items */}
      <Modal open={isFeaturesModalOpen} onClose={() => setIsFeaturesModalOpen(false)} center classNames={{ modal: 'custom-modal' }}>
        <div className="p-4"><h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">One Platform, Endless Possibilities</h2><div className="mt-8 grid gap-8 md:grid-cols-2">{featuresData.map((feature, index) => (<div key={index} className="p-6 bg-gray-900 rounded-lg border border-gray-800"><FeatureIcon path={feature.iconPath} /><h3 className="text-xl font-bold">{feature.title}</h3><p className="mt-2 text-gray-400">{feature.description}</p></div>))}</div></div>
      </Modal>
      <Modal open={isSolutionsModalOpen} onClose={() => setIsSolutionsModalOpen(false)} center classNames={{ modal: 'custom-modal' }}>
        <div className="p-4"><h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">Tailored Solutions for Your Industry</h2><div className="mt-8 grid gap-8 md:grid-cols-2">{solutionsData.map((solution, index) => (<div key={index} className="p-6 bg-gray-900 rounded-lg border border-gray-800 flex items-start gap-6"><div><SolutionIcon /></div><div><h3 className="text-xl font-bold">{solution.title}</h3><p className="mt-2 text-gray-400">{solution.description}</p></div></div>))}</div></div>
      </Modal>
      <Modal open={isTestimonialsModalOpen} onClose={() => setIsTestimonialsModalOpen(false)} center classNames={{ modal: 'custom-modal' }}>
        <div className="p-4"><h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">See How Teams Are Scaling with AI</h2><motion.div className="grid gap-8 md:grid-cols-2" variants={containerVariants} initial="offscreen" animate="onscreen">{testimonialsData.map((testimonial, index) => (<motion.div key={index} className="rounded-2xl border border-gray-800 bg-gray-900 p-8" variants={cardVariants}><h3 className="text-xl font-semibold mb-4 text-white">The flexibility of their platform allowed us to scale</h3><blockquote className="mb-6 text-gray-300 border-l-4 border-gray-700 pl-4 italic">{testimonial.quote}</blockquote><div className="mt-8 flex items-center justify-between"><div className="flex items-center"><Image src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} width={40} height={40} className="mr-4 rounded-full"/><div><p className="font-bold text-sm text-white">{testimonial.name}</p><p className="text-xs text-gray-400">{testimonial.title}</p></div></div><div className="text-right"><div className="flex">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div><p className="text-xs text-gray-500 mt-1">{testimonial.rating.toFixed(1)} ratings</p></div></div></motion.div>))}</motion.div></div>
      </Modal>
      <Modal open={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} center classNames={{ modal: 'custom-modal' }}>
        <div className="p-4">
          <div className="text-center max-w-4xl mx-auto"><h1 className="text-3xl sm:text-4xl font-extrabold">About Vincenzo AI</h1><p className="mt-4 text-gray-400">We are a passionate team of innovators dedicated to making AI accessible for businesses of all sizes.</p></div>
          <div className="mt-12 max-w-5xl mx-auto text-center p-8 bg-gray-900 rounded-lg border border-gray-800"><h2 className="text-2xl font-bold mb-4">Our Mission</h2><p className="text-gray-300">Our mission is to democratize AI, providing businesses with the tools they need to automate complex processes, unlock data-driven insights, and achieve unprecedented growth.</p></div>
          <div className="mt-12 text-center"><h2 className="text-3xl font-extrabold">Meet the Team</h2><p className="mt-4 text-gray-400 max-w-2xl mx-auto">The brilliant minds behind the Vincenzo AI platform.</p><div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">{teamMembers.map((member, index) => (<div key={index} className="flex flex-col items-center"><Image src={member.avatar} alt={`Photo of ${member.name}`} width={128} height={128} className="rounded-full"/><h3 className="mt-4 text-xl font-bold">{member.name}</h3><p className="text-blue-400">{member.role}</p><p className="mt-2 text-gray-400 text-sm">{member.bio}</p></div>))}</div></div>
        </div>
      </Modal>

      <style jsx global>{`
        .custom-modal { background: #111827; color: white; border-radius: 1rem; border: 1px solid #374151; max-width: 800px; padding: 1rem; }
        .react-responsive-modal-closeButton { fill: #9CA3AF; }
        .react-responsive-modal-closeButton:hover { fill: #FFFFFF; }
      `}</style>
    </>
  );
};

export default Navbar;

