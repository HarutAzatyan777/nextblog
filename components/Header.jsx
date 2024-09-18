import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'; // Import this first
import Link from 'next/link';
import { getCategories } from '../services'; // Import this after react-icons/fa

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
            <button onClick={toggleMenu} className="text-black">
              {/* Apply rotation class based on isMenuOpen */}
              <FaBars
                size={24}
                className={`transition-transform duration-300 ${isMenuOpen ? '-rotate-90' : 'rotate-0'}`}
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
