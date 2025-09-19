import React from 'react';

const CTA = () => {
  return (
    <section className="container mx-auto my-20 py-16 text-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-700">
      <h2 className="text-4xl font-extrabold text-white">
        Ready to Automate Your Business?
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-blue-100">
        Join thousands of innovative companies and start your free trial today. No credit card required.
      </p>
      <div className="mt-8">
        <button className="transform rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-transform hover:scale-105">
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
};

export default CTA;