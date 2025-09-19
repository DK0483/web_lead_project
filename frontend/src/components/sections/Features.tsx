import React from 'react';
import FeatureCard from '@/components/ui/FeatureCard';

const IconPlaceholder = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Features = () => {
  const featuresData = [
    {
      title: "Intelligent Automation",
      description: "Leverage AI to handle repetitive tasks, freeing up your team for more strategic work.",
      icon: <IconPlaceholder />,
    },
    {
      title: "Advanced Analytics",
      description: "Gain deep insights into your operations with our AI-powered data analysis and reporting.",
      icon: <IconPlaceholder />,
    },
    {
      title: "Seamless Integration",
      description: "Connect our platform with the tools you already use, from CRMs to project management software.",
      icon: <IconPlaceholder />,
    },
  ];

  return (
    <section className="container mx-auto py-20 text-center">
      <h2 className="mb-4 text-4xl font-extrabold">Everything You Need to Succeed</h2>
      <p className="mb-12 max-w-2xl mx-auto text-gray-400">
        Our platform is packed with powerful features designed to help you automate, analyze, and grow.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;