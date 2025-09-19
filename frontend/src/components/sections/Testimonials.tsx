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

// The fix is here: 'staggerChildren' now lives inside the 'transition' object
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

const Testimonials = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold">Trusted by Innovative Founders</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Our platform helps teams of all sizes achieve their goals. Here&apos;s what some of them have to say.
        </p>
      </div>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants} // We apply the container variants here
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div key={index} className="rounded-lg border border-gray-800 bg-gray-900 p-8" variants={cardVariants}>
            <blockquote className="mb-6 text-gray-300">
              &quot;{testimonial.quote}&quot;
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
```

#### **2. Push the Final Fix to GitHub (The Most Important Step)**

After you have saved the correct code above, you **must push this change to GitHub**. This is the step that will tell Vercel to try building your project again with the fixed code.

1.  **Save** the updated `Testimonials.tsx` file in VS Code.
2.  In your VS Code terminal (in the root directory of your project), run these commands:

    ```bash
    git add .
    git commit -m "fix(frontend): Final correction for Framer Motion deployment error"
    git push

