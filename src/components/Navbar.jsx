// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/concettologo.png'; 
import '../css/gradient.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b-3 border-custom-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-10 w-15" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div className={`hidden md:flex md:items-baseline md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
            <Link to="/events" className="gradient-text px-3 py-2 rounded-md font-medium">Events</Link>
            <Link to="/campus-ambassador" className="gradient-text px-3 py-2 rounded-md font-medium">Campus Ambassador</Link>
            <Link to="/about-us" className="gradient-text px-3 py-2 rounded-md font-medium">About Us</Link>
          </div>


          <div className={`hidden md:flex md:items-center md:ml-6 ${isOpen ? 'block' : 'hidden'}`}>
            <Link to="/sign-up" className="gradient-button px-4 py-2 rounded-md font-medium transition-colors">Sign Up</Link>
            <Link to="/login" className="gradient-button ml-4 px-4 py-2 rounded-md font-medium transition-colors">Login</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 py-3 space-y-1">
            <Link to="/events" className="block px-3 py-2 rounded-md text-base font-medium gradient-text">Events</Link>
            <Link to="/campus-ambassador" className="block px-3 py-2 rounded-md text-base font-medium gradient-text">Campus Ambassador</Link>
            <Link to="/about-us" className="block px-3 py-2 rounded-md text-base font-medium gradient-text">About Us</Link>
          </div>
          <div className="px-2 py-3">
            <Link to="/signup" className="block px-4 py-2 rounded-md font-medium gradient-button">Sign Up</Link>
            <Link to="/login" className="block px-4 py-2 rounded-md font-medium gradient-button mt-2">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


