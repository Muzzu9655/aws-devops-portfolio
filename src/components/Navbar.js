import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-white">
          Muzamil's portfolio
        </div>

        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#home" className="text-white hover:text-yellow-300 transition duration-300">Home</a>
          <a href="#about" className="text-white hover:text-yellow-300 transition duration-300">About</a>
          <a href="#projects" className="text-white hover:text-yellow-300 transition duration-300">Projects</a>
          <a href="#contact" className="text-white hover:text-yellow-300 transition duration-300">Contact</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-4 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
          <a href="#home" className="block text-white hover:text-yellow-300 text-lg transition duration-300">Home</a>
          <a href="#about" className="block text-white hover:text-yellow-300 text-lg transition duration-300">About</a>
          <a href="#projects" className="block text-white hover:text-yellow-300 text-lg transition duration-300">Projects</a>
          <a href="#contact" className="block text-white hover:text-yellow-300 text-lg transition duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
