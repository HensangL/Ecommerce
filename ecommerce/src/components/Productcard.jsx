import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white border-2 rounded-3xl shadow-lg p-4 w-[270px]">

      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-[220px] h-[170px] rounded-2xl object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg text-center mt-4">{title}</h2>

      {/* Size Options */}
      <div className="flex flex-wrap gap-2 my-2 text-xs font-medium">
        <span className="px-2 py-1 border rounded-full">300 ml</span>
        <span className="px-2 py-1 border rounded-full">500 ml</span>
        <span className="px-2 py-1 border rounded-full bg-orange-500 text-white">800 ml</span>
        <span className="px-2 py-1 border rounded-full">1 Litre</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">
        Stay on top of your daily water intake with this innovative bottle featuring built-in hydration reminders and Bluetooth connectivity.
      </p>

      {/* Price + Add to Cart Button */}
      <div className="flex items-center justify-between">
        <span className="text-l ">${price}</span>
        <button className="flex items-center gap-2 bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
