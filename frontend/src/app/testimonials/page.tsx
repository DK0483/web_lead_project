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
    rating: 5.0,
  },
  {
    quote: "We always thought we were running an efficient operation, but the analytics showed us blind spots we didn't even know existed. Finding those bottlenecks was a real 'wow' moment. Everything runs so much smoother now.",
    name: "Rohan Mehta",
    title: "Director, Digital Ventures",
    avatar: "https://placehold.co/100x100/1D4ED8/FFFFFF/png?text=RM",
    rating: 5.0,
  },
  // We'll use two testimonials for this new layout
];

const containerVariants: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

// A simple star component for ratings
const StarIcon = () => (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);


const Testimonials = () => {
  return (
    <section id="testimonials" className="container mx-auto py-20 px-4">
      <div className="mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold">See How Teams Are Scaling with AI</h2>
        <p className="mx-auto mt-4 max-w-3xl text-gray-400">
          From startups to enterprise, discover how our AI platform delivers measurable results across industries.
        </p>
      </div>
      <motion.div
        className="grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div key={index} className="rounded-2xl border border-gray-800 bg-gray-900 p-8" variants={cardVariants}>
            <h3 className="text-xl font-semibold mb-4">The flexibility of our platform allowed us to scale</h3>
            <blockquote className="mb-6 text-gray-300 border-l-4 border-gray-700 pl-4">
              {testimonial.quote}
            </blockquote>
            <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src={testimonial.avatar}
                        alt={`Avatar of ${testimonial.name}`}
                        width={40}
                        height={40}
                        className="mr-4 rounded-full"
                    />
                    <div>
                        <p className="font-bold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-400">{testimonial.title}</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.rating.toFixed(1)} ratings</p>
                </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;