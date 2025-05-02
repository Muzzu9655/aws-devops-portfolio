import React, { useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (section) => {
    setClicked(section);
    setIsOpen(false); // Close mobile menu after click
    if (section === "home") {
      window.location.reload(); // Refresh page on Home click
    }
  };

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-white">
          Welcome To My Portfolio 🚀
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              onClick={() => handleLinkClick(item)}
              className={`text-white ${
                clicked === item ? 'text-yellow-300' : 'hover:text-yellow-300'
              } transition duration-300 cursor-pointer capitalize`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-4 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              onClick={() => handleLinkClick(item)}
              className={`block text-white ${
                clicked === item ? 'text-yellow-300' : 'hover:text-yellow-300'
              } text-lg transition duration-300 cursor-pointer capitalize`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
