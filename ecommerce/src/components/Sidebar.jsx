// CosmeticSidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 p-4 bg-gray-50 border-r border-gray-200 h-full">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Category */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        <ul className="space-y-1">
          <li><input type="checkbox" id="drinks" className="mr-2"/> <label htmlFor="drinks">Drinks</label></li>
          <li><input type="checkbox" id="fragrance" className="mr-2"/> <label htmlFor="fragrance">Fragrance</label></li>
          <li><input type="checkbox" id="personal-care" className="mr-2"/> <label htmlFor="personal-care">Personal Care</label></li>
          <li><input type="checkbox" id="cosmetics" className="mr-2"/> <label htmlFor="cosmetics">Cosmetics</label></li>
          <li><input type="checkbox" id="others" className="mr-2"/> <label htmlFor="others">Others</label></li>
        </ul>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price</h3>
        <ul className="space-y-1">
          <li><input type="radio" name="price" id="under100" className="mr-2"/> <label htmlFor="under100">Under $100</label></li>
          <li><input type="radio" name="price" id="100-250" className="mr-2"/> <label htmlFor="100-250">$100 - $250</label></li>
          <li><input type="radio" name="price" id="251-500" className="mr-2"/> <label htmlFor="251-500">$251 - $500</label></li>
        </ul>
      </div>

      {/* On Sale */}
      <div>
        <h3 className="font-semibold mb-2">On Sale</h3>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" /> Show only discounted products
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
