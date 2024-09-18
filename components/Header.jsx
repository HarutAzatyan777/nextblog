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
            <span className="cursor-pointer font-bold text-4xl text-black" style={{ fontFamily: 'Lobster, cursive' }}>
              Dev Aura
            </span>
          </Link>
          {/* Menu Icon for screens <= 1280px */}
          <div className="xl:hidden block">
            <button type="button" onClick={toggleMenu} className="text-black">
              {/* Apply rotation class based on isMenuOpen */}
              <img
                src="/path/to/menu-icon.png" // Replace with the path to your icon image
                alt="Menu"
                className={`transition-transform duration-300 ${isMenuOpen ? '-rotate-90' : 'rotate-0'}`}
                style={{ width: '24px', height: '24px' }} // Adjust size as needed
              />
            </button>
          </div>
        </div>
        {/* Categories - shown on larger screens or when menu is open on smaller screens */}
        <div className={`xl:float-left xl:contents ${isMenuOpen ? 'flex flex-col items-center' : 'hidden'} xl:block`}>
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="block xl:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
