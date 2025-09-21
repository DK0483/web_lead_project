import React from 'react';
import HeroAnimation from '@/components/ui/HeroAnimation';

const Hero = () => {
  return (
    <section className="container relative mx-auto mt-16 text-center">
      <HeroAnimation />

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

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
          Stop wasting time on repetitive tasks. Our platform leverages cutting-edge AI to automate your business processes, so you can focus on what truly matters.
        </p>

        {/* The button container has been removed from here. */}
      </div>
      
    </section>
  );
};

export default Hero;

