import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Cart";

const ProductCard = ({ data }) => {
  const { id, name, price, oldPrice, image, slug, category, rating, discount, featured } = data;
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
    <div className="bg-white rounded-2xl shadow-md overflow-hidden relative border border-gray-200 group">
      {/* Discount & Featured Badges */}
      {discount && (
        <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow">
          {discount}% OFF
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
        <p className="text-xs text-pink-600 font-semibold uppercase tracking-wide mb-1">
          {category}
        </p>
        <Link to={`/${slug}`}>
          <h5 className="text-base font-semibold text-gray-900 line-clamp-2">
            {name}
          </h5>
        </Link>

        {/* Description (short) */}
        {data.description && (
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {data.description}
          </p>
        )}

        {/* Price Section */}
        <div className="mt-3">
          <span className="text-lg font-bold text-gray-900">
            NPR {price.toLocaleString()}
          </span>
          {oldPrice && (
            <span className="ml-2 text-sm line-through text-gray-400">
              NPR {oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <svg
            className="w-4 h-4 text-yellow-400 mr-1"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="text-sm text-gray-600">{rating || "0"}</span>
        </div>

        {/* Add to Cart Button */}
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
