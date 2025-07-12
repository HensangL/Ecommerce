import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">MyStore</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-g:text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Home</a>
            <a href="#" className="text-g:text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Shop</a>
            <a href="#" className="text-g:text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">About</a>
            <a href="#" className="text-g:text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-700" />
                <div className="w-6 h-0.5 bg-gray-700" />
                <div className="w-6 h-0.5 bg-gray-700" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 shadow-md">
          <a href="#" className="block  hover:text-bl hover:bg-yellow-400 hover:rounded-2xl p-2ue-600">Home</a>
          <a href="#" className="block  hover:text-bl hover:bg-yellow-400 hover:rounded-2xl p-2ue-600">Shop</a>
          <a href="#" className="block  hover:text-bl hover:bg-yellow-400 hover:rounded-2xl p-2ue-600">About</a>
          <a href="#" className="block  hover:text-bl hover:bg-yellow-400 hover:rounded-2xl p-2ue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
