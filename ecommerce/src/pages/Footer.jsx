import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative overflow-hidden">
      {/* Gradient Glow Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between gap-10 animate-fadeIn">
        
        {/* Logo & Description */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-3 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 transition">
            YourBrand
          </h2>
          <p className="text-gray-400">
            Building quality products that make life easier. Connect with us on social media and stay updated!
          </p>
          <div className="flex mt-4 gap-4">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" }
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white transition transform hover:scale-110 shadow-md"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
          
          <div className="group">
            <h3 className="text-white font-semibold mb-3">Products</h3>
            <ul className="space-y-2 text-gray-400">
              {["New Arrivals", "Best Sellers", "Discounts", "All Products"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-white transition relative inline-block"
                  >
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="group">
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {["About Us", "Careers", "Blog", "Contact"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-white transition relative inline-block"
                  >
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="group">
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-400">
              {["Help Center", "Shipping", "Returns", "Privacy Policy"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-white transition relative inline-block"
                  >
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="relative mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
