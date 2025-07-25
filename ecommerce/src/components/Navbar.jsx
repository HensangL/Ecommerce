import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Products } from './Products';
import { clearCart, increaseQuantity, decreaseQuantity } from '../store/Cart';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrease = (productId) => {
    dispatch(increaseQuantity({ productId }));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity({ productId }));
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // or use navigate('/checkout') if using useNavigate()
  };

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
                Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
              </button>

              {/* Cart Dropdown */}
              {cartOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 ring-1 ring-black ring-opacity-5">
                  <div className="p-4 max-h-96 overflow-y-auto">
                    {cartItems.length === 0 ? (
                      <p>Your cart is empty.</p>
                    ) : (
                      <div>
                        <ul>
                          {cartItems.map(item => {
                            const product = Products.find(p => p.id === item.productId);
                            if (!product) return null;

                            return (
                              <li key={item.productId} className="flex items-center mb-2">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-10 h-10 object-cover rounded-md mr-4"
                                />
                                <div className="flex-grow">
                                  <p className="font-semibold">{product.name}</p>
                                  <div className="flex items-center">
                                    <button onClick={() => handleDecrease(item.productId)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                                    <p className="text-sm text-gray-500 px-2">Qty: {item.quantity}</p>
                                    <button onClick={() => handleIncrease(item.productId)} className="px-2 py-1 bg-gray-300 rounded">+</button>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>

                        {/* Total Price */}
                        <p className="font-semibold mt-2 text-right">
                          Total: Rs.{" "}
                          {cartItems.reduce((total, item) => {
                            const product = Products.find(p => p.id === item.productId);
                            return product ? total + product.price * item.quantity : total;
                          }, 0)}
                        </p>

                        {/* Buttons */}
                        <div className="flex justify-between mt-4">
                          <button
                            onClick={handleCheckout}
                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                          >
                            Checkout
                          </button>
                          <button
                            onClick={handleClearCart}
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                          >
                            Clear Cart
                          </button>
                        </div>
                      </div>
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
