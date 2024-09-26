import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-black py-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Dev Aura"
              title="Dev Aura"
              className="cursor-pointer h-10 md:h-12 lg:h-14 xl:h-16"
              style={{ width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          {/* Menu Icon for screens <= 1280px */}
          <div className="xl:hidden block">
            <button
              type="button"
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8"
            >
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out 
                ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}
              />
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out my-1 
                ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out 
                ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
        {/* Categories */}
        <div
          className={`xl:float-left xl:contents transition-all duration-500 ease-in-out 
          ${isMenuOpen ? 'max-h-96 opacity-100 flex' : 'max-h-0 opacity-0 hidden'} 
          overflow-hidden xl:max-h-full xl:opacity-100 flex-col items-center justify-center`}
        >
          <div className="flex flex-wrap justify-center xl:justify-start">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}>
                <span className="block mt-2 mx-2 px-4 py-2 text-black font-semibold cursor-pointer text-center border border-gray-300 rounded-lg">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
