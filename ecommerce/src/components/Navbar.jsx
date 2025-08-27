import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Products } from './Products';
import { clearCart, increaseQuantity, decreaseQuantity } from '../store/Cart';
import { ShoppingCart } from 'lucide-react';
import '../components/Css/Navbar.css';
import '../components/Css/fill-effect.css';

// AnimatedLink Component for letter-by-letter effect
const AnimatedLink = ({ to, children }) => {
  return (
    <Link to={to} className="animated-link">
      {[...children].map((letter, i) => (
        <span key={i}>{letter}</span>
      ))}
    </Link>
  );
};

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim() === "") {
      setSearchResults([]);
    } else {
      const results = Products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleResultClick = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleClearCart = () => dispatch(clearCart());
  const handleIncrease = (productId) => dispatch(increaseQuantity({ productId }));
  const handleDecrease = (productId) => dispatch(decreaseQuantity({ productId }));
  const handleCheckout = () => alert('Proceeding to checkout...');

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold text-blue-600 mr-4">MyStore</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <AnimatedLink to="/">Home</AnimatedLink>
            <AnimatedLink to="/products">Shop</AnimatedLink>
            <AnimatedLink to="/about">About</AnimatedLink>
            <AnimatedLink to="/contact">Contact</AnimatedLink>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-grow justify-center gap-1 px-4 relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="border p-2 rounded w-full"
            />
            {searchResults.length > 0 && (
              <div className="absolute mt-10 ml-5 w-full bg-white rounded-md shadow-lg z-50">
                <ul>
                  {searchResults.map(product => (
                    <li key={product.id} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={handleResultClick}>
                      <Link to={`/${product.slug}`} className="flex items-center">
                        <img src={product.image} alt={product.name} className="w-8 h-8 object-cover rounded-md mr-2" />
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Cart Button */}
          <div className="relative">
            <Link to="/cart" className="fill-button">
              <ShoppingCart size={22} />
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className={`md:hidden relative mt-2 px-4`}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {searchResults.length > 0 && (
          <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-50">
            <ul>
              {searchResults.map(product => (
                <li
                  key={product.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleResultClick}
                >
                  <Link to={`/${product.slug}`} className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-8 h-8 object-cover rounded-md mr-2"
                    />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col">
          <AnimatedLink to="/">Home</AnimatedLink>
          <AnimatedLink to="/products">Shop</AnimatedLink>
          <AnimatedLink to="/about">About</AnimatedLink>
          <AnimatedLink to="/contact">Contact</AnimatedLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
