import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const FeatureIcon = ({ path }: { path: string }) => (
    <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg mb-4">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
        </svg>
    </div>
);

const featuresData = [
    { title: "Automated Task Management", description: "Eliminate manual work with intelligent automation that adapts to your workflows.", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Advanced Data Analysis", description: "Leverage AI-powered analytics to gain deep insights and make decisions with confidence.", iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    { title: "Seamless Integrations", description: "Connect Vincenzo AI to the tools you already use, from CRMs to databases.", iconPath: "M17 14v6m-3-3h6M3 10v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2z" },
    { title: "Predictive Insights", description: "Stay ahead of the curve with AI that anticipates future trends and customer needs.", iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0" },
];

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold">One Platform, Endless Possibilities</h1>
          <p className="mt-4 text-lg text-gray-400">Our AI-powered features are designed to adapt to your unique workflows, helping your business scale smarter, faster, and with precision.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
            {featuresData.map((feature, index) => (
                <div key={index} className="p-8 bg-gray-900 rounded-lg border border-gray-800">
                    <FeatureIcon path={feature.iconPath} />
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="mt-2 text-gray-400">{feature.description}</p>
                </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;