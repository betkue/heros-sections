/* eslint-disable @next/next/no-img-element */
"use client";

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
    <header className="clash-display">
      <div className="flex justify-between items-center px-6 py-4 md:px-10 md:py-6">
        <img src="/assets-5/logo.png" alt="Logo" className="h-12 w-40 " />

        <nav className="hidden md:flex flex-1 justify-center space-x-6 md:space-x-28 text-xs md:text-sm font-medium">
          <a href="#" className="hover:underline">
            HOME
          </a>
          <a href="#" className="hover:underline">
            ABOUT
          </a>
          <a href="#" className="hover:underline">
            CASE STUDIES
          </a>
          <a href="#" className="hover:underline">
            CAREERS
          </a>
        </nav>

        <button
          className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
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

      {isMenuOpen && (
        <div className="lg:hidden bg-white p-4 mt-2 rounded-lg shadow-lg absolute top-16 left-4 right-4 z-10">
          <nav className="space-y-4">
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 text-center"
            >
              HOME
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 text-center"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 text-center"
            >
              CASE STUDIES
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 text-center"
            >
              CAREERS
            </a>
          </nav>
          <button
            className="w-full mt-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
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
