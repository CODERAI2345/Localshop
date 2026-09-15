import React from 'react';

const EnquiryPage: React.FC = () => {
  const handleOrderClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfUA2a0VMNagvjSYLE-FN2u735Ie7odcdJv1Ghs0HNmDoyfAQ/viewform?usp=header', '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Order Online</h1>
        <p className="text-gray-600 mb-8">
          Place your order from your favorite local shops quickly and easily through our online form.
        </p>
        
        <button
          onClick={handleOrderClick}
          className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg text-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Place Your Order
        </button>
      </div>
    </div>
  );
};

export default EnquiryPage;