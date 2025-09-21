import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Image from 'next/image';

// Placeholder data for team members
const teamMembers = [
    {
        name: "Rohan Mehta",
        role: "Founder & CEO",
        avatar: "https://placehold.co/200x200/1D4ED8/FFFFFF/png?text=RM",
        bio: "Visionary leader with a passion for leveraging AI to solve complex business challenges."
    },
    {
        name: "Priya Sharma",
        role: "Chief Technology Officer",
        avatar: "https://placehold.co/200x200/7E22CE/FFFFFF/png?text=PS",
        bio: "Expert in machine learning and scalable systems, driving the innovation behind our platform."
    },
    {
        name: "Aarav Singh",
        role: "Head of Product",
        avatar: "https://placehold.co/200x200/16A34A/FFFFFF/png?text=AS",
        bio: "Dedicated to creating intuitive and powerful user experiences that deliver real value."
    },
];

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold">About Vincenzo AI</h1>
          <p className="mt-4 text-lg text-gray-400">
            We are a passionate team of innovators, engineers, and strategists dedicated to making the power of artificial intelligence accessible and transformative for businesses of all sizes.
          </p>
        </div>

        {/* Mission/Story Section */}
        <div className="mt-20 max-w-5xl mx-auto text-center p-8 bg-gray-900 rounded-lg border border-gray-800">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
                Our mission is to democratize artificial intelligence, providing businesses with the tools they need to automate complex processes, unlock data-driven insights, and achieve unprecedented levels of efficiency and growth. We believe in building a future where technology empowers human potential, not replaces it.
            </p>
        </div>
        
        {/* Team Section */}
        <div className="mt-20 text-center">
            <h2 className="text-4xl font-extrabold">Meet the Team</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                The brilliant minds behind the Vincenzo AI platform.
            </p>
            <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Image 
                            src={member.avatar}
                            alt={`Photo of ${member.name}`}
                            width={128}
                            height={128}
                            className="rounded-full"
                        />
                        <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                        <p className="text-blue-400">{member.role}</p>
                        <p className="mt-2 text-gray-400 text-sm">{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;