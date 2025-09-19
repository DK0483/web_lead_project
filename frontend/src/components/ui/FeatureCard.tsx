import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 text-left">
      <div className="mb-4 inline-block rounded-lg bg-blue-600 p-3">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;