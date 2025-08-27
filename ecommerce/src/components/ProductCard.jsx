// ProductCard.js
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Cart";

const ProductCard = ({ data }) => {
  const { id, name, price, oldPrice, image, slug, category, brand, rating, onSale, featured } = data;
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden relative border border-gray-200 group hover:shadow-lg transition">
      
      {/* On Sale & Featured Badges */}
      {onSale && (
        <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow">
          Sale
        </span>
      )}
      {featured && (
        <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
          Featured
        </span>
      )}

      {/* Product Image */}
      <Link to={`/${slug}`} className="block overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
      </Link>

      {/* Product Info */}
      <div className="p-4">
        {/* Category & Brand */}
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-pink-600 font-semibold uppercase">{category}</span>
          {brand && <span className="text-xs text-gray-500">{brand}</span>}
        </div>

        {/* Product Name */}
        <Link to={`/${slug}`}>
          <h5 className="text-base font-semibold text-gray-900 line-clamp-2">{name}</h5>
        </Link>

        {/* Description */}
        {data.description && (
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{data.description}</p>
        )}

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">NPR {price.toLocaleString()}</span>
          {oldPrice && <span className="text-sm line-through text-gray-400">NPR {oldPrice.toLocaleString()}</span>}
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 mr-1 ${i < (rating || 0) ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09L5.12 11.545 0 7.455l6.061-.88L10 1l3.939 5.575L20 7.455l-5.12 4.09 1.998 6.545z" />
            </svg>
          ))}
          <span className="text-sm text-gray-600">{rating || "0"}</span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg shadow transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
