import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Correct import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">MyStore</div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-grow justify-center gap-1 px-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full max-w-md px-4 py-1 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-2 px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Search</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Cart</button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Home</Link>
            <Link to="/shop" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Shop</Link>
            <Link to="/about" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">About</Link>
            <Link to="/contact" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Contact</Link>
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
          {/* Mobile Search Bar */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Search</button>
          </div>

          <Link to="/" className="block hover:bg-yellow-400 hover:rounded-2xl p-2 text-blue-600">Home</Link>
          <Link to="/shop" className="block hover:bg-yellow-400 hover:rounded-2xl p-2 text-blue-600">Shop</Link>
          <Link to="/about" className="block hover:bg-yellow-400 hover:rounded-2xl p-2 text-blue-600">About</Link>
          <Link to="/contact" className="block hover:bg-yellow-400 hover:rounded-2xl p-2 text-blue-600">Contact</Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
