import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

// A simple icon to represent each solution category
const SolutionIcon = () => (
    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-6h3m-3 6h3M6 12H3m18 0h-3" />
    </svg>
);

const solutionsData = [
    {
        title: "For E-commerce",
        description: "Automate inventory management, personalize customer recommendations, and optimize your supply chain with our AI-powered tools."
    },
    {
        title: "For Healthcare",
        description: "Streamline patient scheduling, automate administrative tasks, and leverage predictive analytics to improve patient outcomes."
    },
    {
        title: "For Finance",
        description: "Enhance fraud detection, automate compliance reporting, and provide personalized financial advice with our secure AI models."
    },
     {
        title: "For Manufacturing",
        description: "Optimize production lines, predict maintenance needs before they happen, and ensure quality control with AI-powered visual inspection."
    },
];

const SolutionsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Tailored Solutions for Your Industry</h1>
          <p className="mt-4 text-lg text-gray-400">
            Vincenzo AI provides powerful, adaptable solutions designed to meet the unique challenges and opportunities of your specific field.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
            {solutionsData.map((solution, index) => (
                <div key={index} className="p-8 bg-gray-900 rounded-lg border border-gray-800 flex items-start gap-6">
                    <div>
                        <SolutionIcon />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">{solution.title}</h3>
                        <p className="mt-2 text-gray-400">{solution.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;