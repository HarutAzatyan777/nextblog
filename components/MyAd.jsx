// components/myad.jsx

import React from 'react';
import Link from 'next/link';

const MyAd = () => {
  return (
    <Link href="https://devaura.site/">
      <a className="block max-w-lg mx-auto my-8 border-2 border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
        <img 
          src="/images/devanimation.gif" 
          alt="Full-Stack Developer Animation" 
          className="w-full h-auto rounded-lg mb-4" 
        />
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Full-Stack Developer for Hire</h2>
          <p className="mb-4">Ready to build your next web app!</p>
          <ul className="mb-4 list-disc list-inside">
            <li><strong>Services:</strong> Web development & more</li>
            <li><strong>Tech:</strong> React, Next.js, Nest, Vue, Node</li>
          </ul>
          <span 
            className="text-white px-4 py-2 rounded inline-block transition-colors" 
            style={{ backgroundColor: '#38cda1' }} 
          >
            Portfolio
          </span>
        </div>
      </a>
    </Link>
  );
};

export default MyAd;
