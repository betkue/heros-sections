"use client"
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="pt-8">
      <div className="flex justify-between items-center p-3 mx-4 md:mx-28 bg-white rounded-xl">
        <h1 className="text-3xl font-bold text-[#12163f]">Operflow</h1>

        <div className="flex items-center justify-end space-x-4 w-full">
          <nav className="space-x-2 lg:space-x-3 hidden lg:flex justify-end w-full text-center items-center">
            <a href="#" className="text-customPurple hover:text-primary">
              Why Operflow?
            </a>
            <a href="#" className="text-customPurple hover:text-primary">
              Benefits
            </a>
            <a href="#" className="text-customPurple hover:text-primary">
              Process
            </a>
            <a href="#" className="text-customPurple hover:text-primary">
              Success Stories
            </a>
            <a href="#" className="text-customPurple hover:text-primary">
              FAQ
            </a>
          </nav>

          <button className="bg-gradiantButtom text-white py-2 px-6 rounded-lg shadow-lg hover:opacity-90 whitespace-nowrap">
            Book a Free Discovery Call
          </button>
          <button
            className="lg:hidden text-customPurple0 hover:text-primary focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>


        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white p-4 rounded-lg shadow-lg absolute top-16 left-4 right-4 z-10">
          <nav className="space-y-4">
            <a href="#" className="text-gray-600 hover:text-primary block text-center">
              Why Operflow?
            </a>
            <a href="#" className="text-gray-600 hover:text-primary block text-center">
              Benefits
            </a>
            <a href="#" className="text-gray-600 hover:text-primary block text-center">
              Process
            </a>
            <a href="#" className="text-gray-600 hover:text-primary block text-center">
              Success Stories
            </a>
            <a href="#" className="text-gray-600 hover:text-primary block text-center">
              FAQ
            </a>
          </nav>
          <button
            className="text-gray-600 mt-4 w-full text-center py-2 px-4 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={closeMenu}
          >
            Close Menu
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
