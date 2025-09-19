"use client"; // Required for Framer Motion and other client-side hooks

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    quote: "Honestly, I was skeptical at first, but this platform has genuinely transformed how we operate. It's not just about the 20+ hours we've saved each week; it's that my team is now freed up from repetitive administrative tasks, allowing them to focus entirely on creative solutions and strategic growth.",
    name: "Priya Sharma",
    title: "Founder, TechSolutions Pvt. Ltd.",
    avatar: "https://placehold.co/100x100/7E22CE/FFFFFF/png?text=PS",
    rating: 5,
  },
  {
    quote: "We always prided ourselves on running an efficient operation, but the AI-powered analytics showed us critical blind spots we didn't even know existed. Identifying those hidden bottlenecks was a true 'wow' moment for us. Now, our entire workflow is significantly smoother and more predictable.",
    name: "Rohan Mehta",
    title: "Director, Digital Ventures",
    avatar: "https://placehold.co/100x100/1D4ED8/FFFFFF/png?text=RM",
    rating: 5,
  },
  {
    quote: "As a product head, my biggest fear is a nightmare integration project that derails our roadmap. I was genuinely shocked at how simple it was to get Vincenzo AI connected to our existing stack. A special shout-out to their support team, who were actually helpful and not just reading from a script.",
    name: "Aarav Singh",
    title: "Head of Product, Innovate Labs",
    avatar: "https://placehold.co/100x100/16A34A/FFFFFF/png?text=AS",
    rating: 5,
  },
];

const cardVariants = {
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
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(rating)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold">Real Stories, Real Results</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Our platform empowers teams of all sizes to innovate and achieve their goals. Here&apos;s what some of our partners have to say about their experience.
        </p>
      </div>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        staggerChildren={0.3}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div key={index} className="flex flex-col rounded-lg border border-gray-800 bg-gray-900 p-8" variants={cardVariants}>
            <div className="flex-grow">
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 mb-6 text-gray-300">
                &quot;{testimonial.quote}&quot;
              </blockquote>
            </div>
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;