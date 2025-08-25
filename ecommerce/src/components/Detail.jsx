import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "./Products";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Cart";
import { Star } from "lucide-react";

const Detail = () => {
  const { slug } = useParams();
  const product = Products.find((p) => p.slug === slug);
  const dispatch = useDispatch();

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-20 text-xl font-semibold">
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: 1,
        name: product.name,
        image: product.image,
      })
    );
  };

  return (
    <div className="container mx-auto mt-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 bg-white shadow-xl rounded-2xl p-6 md:p-10">
        {/* Left: Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-2xl shadow-md object-contain"
          />
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-between">
          {/* Category */}
          <span className="inline-block text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-3">
            {product.category || "Electronics"}
          </span>

          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {product.name}
          </h1>

          {/* Price + Rating */}
          <div className="flex items-center gap-4 mb-6">
            <p className="text-2xl md:text-3xl font-bold text-blue-600">
              ${product.price}
            </p>
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.round(product.rating || 4.8) ? "fill-yellow-500" : "fill-gray-300"}
                />
              ))}
              <span className="ml-2 text-gray-600 text-sm">
                ({product.rating || 4.8})
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description ||
              "Premium wireless headphones with active noise cancellation, 30-hour battery life, and studio-quality sound."}
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              {product.features
                ? product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✔</span> {feature}
                    </li>
                  ))
                : [
                    "Active Noise Cancellation",
                    "30-hour Battery",
                    "Quick Charge",
                    "Premium Build",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✔</span> {f}
                    </li>
                  ))}
            </ul>
          </div>

          {/* Stock Info */}
          <p className="text-green-600 font-medium mb-6">● In Stock</p>

          {/* Sticky Add to Cart Button */}
          <div className="mt-auto">
            <button
              onClick={handleAddToCart}
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
