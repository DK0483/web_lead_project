"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    quote: "Honestly, I was skeptical at first, but this platform has genuinely changed how we work. It's not just about the time we've saved—which is a lot—it's that my team is now freed up from tedious tasks to focus on actual growth.",
    name: "Priya Sharma",
    title: "Founder, TechSolutions Pvt. Ltd.",
    avatar: "https://placehold.co/100x100/7E22CE/FFFFFF/png?text=PS",
  },
  {
    quote: "We always thought we were running an efficient operation, but the analytics showed us blind spots we didn't even know existed. Finding those bottlenecks was a real 'wow' moment. Everything runs so much smoother now.",
    name: "Rohan Mehta",
    title: "Director, Digital Ventures",
    avatar: "https://placehold.co/100x100/1D4ED8/FFFFFF/png?text=RM",
  },
  {
    quote: "As a product head, I was bracing myself for a nightmare integration project. I was shocked at how simple it was to get this connected to our stack. A special shout-out to their support team, who were actually helpful and not just reading from a script.",
    name: "Aarav Singh",
    title: "Head of Product, Innovate Labs",
    avatar: "https://placehold.co/100x100/16A34A/FFFFFF/png?text=AS",
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="container mx-auto py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold">Loved by Industry Leaders</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Our platform helps teams of all sizes achieve their goals. Here's what some of them have to say.
        </p>
      </div>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="rounded-lg border border-gray-800 bg-gray-900 p-8"
            variants={cardVariants}
          >
            <blockquote className="mb-6 text-gray-300">
              "{testimonial.quote}"
            </blockquote>
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