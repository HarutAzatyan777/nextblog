import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import { FaBars } from 'react-icons/fa'; // Import a menu icon from react-icons

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu open/close

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
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">Dev Aura</span>
          </Link>
          {/* Menu Icon for screens <= 1280px */}
          <div className="xl:hidden block">
            <button onClick={toggleMenu} className="text-white">
              <FaBars size={24} />
            </button>
          </div>
        </div>
        {/* Categories - shown on larger screens or when menu is open on smaller screens */}
        <div className={`xl:float-left xl:contents ${isMenuOpen ? 'block' : 'hidden'} xl:block`}>
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="block xl:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
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
