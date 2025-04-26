// src/components/Navbar.js
import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-teal-700 fixed w-full z-10 top-0 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center text-white">
        {/* Logo or Title */}
        <h1 className="text-2xl font-extrabold tracking-wide transition-all duration-300 transform hover:scale-110">Muzamil's Portfolio</h1>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl transition-all duration-300 hover:text-yellow-400 transform"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Navbar Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-teal-500 to-teal-700 p-4 space-y-4 text-center text-white transition-all duration-500 ease-in-out transform animate-slide-up">
          <a
            href="#home"
            className="text-lg block hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-lg block hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-lg block hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg block hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
