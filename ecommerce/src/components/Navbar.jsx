import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCart = () => setCartOpen(!cartOpen);
  const cartItems = useSelector(state => state.cart.items);

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
            <button className="ml-2 px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Search
            </button>
            <div className="relative">
              <button onClick={toggleCart} className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Cart ({cartItems.length})
              </button>
              {cartOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 ring-1 ring-black ring-opacity-5">
                  <div className="p-4">
                    {cartItems.length === 0 ? (
                      <p>Your cart is empty.</p>
                    ) : (
                      <ul>
                        {cartItems.map(item => (
                          <li key={item.productId} className="flex items-center mb-2">
                            <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-md mr-4" />
                            <div className="flex-grow">
                              <p className="font-semibold">{item.name}</p>
                              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                            </div>
                          </li>
                        ))}
                      </ul>

                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Home</Link>
            <Link to="/shop" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Shop</Link>
            <Link to="/about" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">About</Link>
            <Link to="/contact" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Contact</Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
