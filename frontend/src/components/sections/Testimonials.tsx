"use client"; // Required for Framer Motion and other client-side hooks

import { motion, Variants } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    quote: "Honestly, I was skeptical at first, but this platform has genuinely changed how we work. It's not just about the time we've saved—which is a lot—it's that my team is now freed up from tedious tasks to focus on actual growth.",
    name: "Priya Sharma",
    title: "Founder, TechSolutions Pvt. Ltd.",
    avatar: "https://placehold.co/100x100/7E22CE/FFFFFF/png?text=PS",
    companyLogo: "https://placehold.co/100x40/FFFFFF/000000/svg?text=TechSolutions",
  },
  {
    quote: "We always thought we were running an efficient operation, but the analytics showed us blind spots we didn't even know existed. Finding those bottlenecks was a real 'wow' moment. Everything runs so much smoother now.",
    name: "Rohan Mehta",
    title: "Director, Digital Ventures",
    avatar: "https://placehold.co/100x100/1D4ED8/FFFFFF/png?text=RM",
    companyLogo: "https://placehold.co/100x40/FFFFFF/000000/svg?text=Digital+Ventures",
  },
  {
    quote: "As a product head, I was bracing myself for a nightmare integration project. I was shocked at how simple it was to get this connected to our stack. A special shout-out to their support team, who were actually helpful and not just reading from a script.",
    name: "Aarav Singh",
    title: "Head of Product, Innovate Labs",
    avatar: "https://placehold.co/100x100/16A34A/FFFFFF/png?text=AS",
    companyLogo: "https://placehold.co/100x40/FFFFFF/000000/svg?text=Innovate+Labs",
  },
  {
    quote: "The level of customization is exactly what we needed. We were able to tailor the automation to our unique business logic, which other platforms couldn't handle. It feels like a bespoke solution at a fraction of the cost.",
    name: "Ananya Desai",
    title: "COO, QuantumLeap",
    avatar: "https://placehold.co/100x100/BE123C/FFFFFF/png?text=AD",
    companyLogo: "https://placehold.co/100x40/FFFFFF/000000/svg?text=QuantumLeap",
  },
];

const containerVariants: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Made stagger slightly faster
    },
  },
};

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Testimonials = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold">Real Stories from Innovative Founders</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Our platform empowers teams of all sizes to innovate and achieve their goals. Here&apos;s what some of our partners have to say about their experience.
        </p>
      </div>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" // Changed to 4 columns on large screens
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div key={index} className="flex flex-col rounded-lg border border-gray-800 bg-gray-900 p-8" variants={cardVariants}>
            <div className="flex-grow">
              <blockquote className="mb-6 text-gray-300">
                &quot;{testimonial.quote}&quot;
              </blockquote>
            </div>
            <div className="mt-auto">
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  width={48}
                  height={48}
                  className="mr-4 rounded-full"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-700 pt-4">
                  <Image
                    src={testimonial.companyLogo}
                    alt={`${testimonial.name}'s company logo`}
                    width={100}
                    height={40}
                    className="opacity-60"
                  />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;