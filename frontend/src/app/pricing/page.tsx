import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

// Checkmark icon for the feature lists
const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PricingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-lg text-gray-400">
            Choose the plan that fits your needs. All plans come with our core AI automation features.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Starter Plan */}
          <div className="flex flex-col p-8 bg-gray-900 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-semibold">Starter</h3>
            <p className="mt-4 text-gray-400">For individuals and small teams just getting started.</p>
            <div className="mt-6">
              <span className="text-5xl font-bold">$49</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <ul className="mt-8 space-y-4 flex-grow">
              <li className="flex items-center gap-3"><CheckIcon /> 10,000 AI tasks/month</li>
              <li className="flex items-center gap-3"><CheckIcon /> Standard integrations</li>
              <li className="flex items-center gap-3"><CheckIcon /> Basic analytics dashboard</li>
              <li className="flex items-center gap-3"><CheckIcon /> Email support</li>
            </ul>
            <Link href="/signup" className="mt-8">
              <button className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-6 py-3 font-semibold hover:bg-gray-700 transition-colors">
                Choose Plan
              </button>
            </Link>
          </div>

          {/* Pro Plan - Highlighted */}
          <div className="flex flex-col p-8 bg-gray-900 rounded-lg border border-blue-500 relative shadow-2xl shadow-blue-500/10">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase">Most Popular</span>
            </div>
            <h3 className="text-2xl font-semibold">Pro</h3>
            <p className="mt-4 text-gray-400">For growing businesses that need more power and scale.</p>
            <div className="mt-6">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <ul className="mt-8 space-y-4 flex-grow">
              <li className="flex items-center gap-3"><CheckIcon /> 50,000 AI tasks/month</li>
              <li className="flex items-center gap-3"><CheckIcon /> Advanced integrations</li>
              <li className="flex items-center gap-3"><CheckIcon /> Custom analytics & reporting</li>
              <li className="flex items-center gap-3"><CheckIcon /> Priority email & chat support</li>
            </ul>
            <Link href="/signup" className="mt-8">
              <button className="w-full bg-blue-600 text-white rounded-md px-6 py-3 font-semibold hover:bg-blue-700 transition-colors">
                Choose Plan
              </button>
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col p-8 bg-gray-900 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-semibold">Enterprise</h3>
            <p className="mt-4 text-gray-400">For large organizations with custom requirements.</p>
            <div className="mt-6">
              <span className="text-5xl font-bold">Custom</span>
            </div>
            <ul className="mt-8 space-y-4 flex-grow">
              <li className="flex items-center gap-3"><CheckIcon /> Unlimited AI tasks</li>
              <li className="flex items-center gap-3"><CheckIcon /> Custom integrations & API</li>
              <li className="flex items-center gap-3"><CheckIcon /> Dedicated account manager</li>
              <li className="flex items-center gap-3"><CheckIcon /> 24/7 priority support</li>
            </ul>
            <Link href="/contact" className="mt-8">
              <button className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-6 py-3 font-semibold hover:bg-gray-700 transition-colors">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;