import React from 'react';
import HeroAnimation from '@/components/ui/HeroAnimation'; // 1. Import the animation

const Hero = () => {
  return (
    <section className="container relative mx-auto mt-16 text-center">
      {/* 2. Add the animation component here */}
      <HeroAnimation />

      {/* Main Headline (z-index to keep it on top) */}
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Supercharge
          </span>{" "}
          Your Workflow
        </h1>
        <h2 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
          with AI Automation
        </h2>

        {/* Sub-headline */}
        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
          Stop wasting time on repetitive tasks. Our platform leverages cutting-edge AI to automate your business processes, so you can focus on what truly matters.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="transform rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-transform hover:scale-105">
            Get Started for Free
          </button>
          <button className="transform rounded-full border border-gray-700 px-8 py-3 font-semibold transition-transform hover:scale-105 hover:bg-gray-800">
            Book a Demo
          </button>
        </div>
      </div>
      
      {/* We no longer need the static image container */}
    </section>
  );
};

export default Hero;
