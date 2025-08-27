import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Products } from './Products';
import { clearCart, increaseQuantity, decreaseQuantity } from '../store/Cart';
import { ShoppingCart } from 'lucide-react';


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
          <div className="text-xl font-bold text-blue-600">MyStore</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Home</Link>
            <Link to="/shop" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Shop</Link>
            <Link to="/about" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">About</Link>
            <Link to="/contact" className="text-blue-600 hover:bg-yellow-400 hover:rounded-2xl p-2">Contact</Link>
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
              <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-50">
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
            {/* Cart Button */}
<div className="relative">
  <Link
    to="/cart"
    className="flex items-center gap-2 px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
  >
    <ShoppingCart size={22} />
    {cartItems.reduce((total, item) => total + item.quantity, 0)}
  </Link>
</div>



            
           

            {/* Cart - Mobile Fullscreen Drawer */}
            
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link to="/" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">Home</Link>
          <Link to="/shop" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">Shop</Link>
          <Link to="/about" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">About</Link>
          <Link to="/contact" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
