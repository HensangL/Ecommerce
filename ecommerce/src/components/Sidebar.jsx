import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react"; // nice filter icon
import "../components/Css/fill-effect.css"; // import your CSS here ✅


function FilterSidebar({
  selectedCategories,
  setSelectedCategories,
  selectedPrice,
  setSelectedPrice,
  onSaleOnly,
  setOnSaleOnly,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["drinks", "fragrance", "personal-care", "cosmetics", "others"];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const handlePriceChange = (priceId) => {
    setSelectedPrice(priceId === "all" ? "" : priceId);
  };

  const priceRanges = [
    { id: "under100", label: "Under $100" },
    { id: "100-250", label: "$100 - $250" },
    { id: "251-500", label: "$251 - $500" },
    { id: "all", label: "All" },
  ];

  return (
    <>
      {/* Mobile Small Button */}
      <button
        className="md:hidden fixed top-28 left-4 z-50 p-3 bg-white border border-gray-300 rounded-full shadow-lg hover:bg-gray-100 transition"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
      >
        <span className="fill-button"><SlidersHorizontal className=" w-5 h-5 text-gray-700" /></span>
        
      </button>

      {/* Sidebar Content */}
      <aside
        className={`fixed top-16 left-2 h-[calc(100%-4rem)] w-72 bg-white border border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-[110%]"} 
         md:translate-x-0 md:w-64 lg:w-72 md:p-6 lg:p-8 md:h-auto md:sticky md:top-20 md:block rounded-2xl`}
      >
        {/* Close button for mobile */}
        <div className="flex justify-between items-center md:hidden p-4 border-b">
          <h2 className="text-xl font-extrabold text-gray-800">Filters</h2>
          <button
            className="text-gray-600 hover:text-gray-800 font-bold text-lg"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Desktop heading */}
        <h2 className="hidden md:block text-xl md:text-2xl font-extrabold mb-6 md:mb-8 text-gray-800">
          Filters
        </h2>

        {/* Category Filter */}
        <div className="mb-6 md:mb-8 border-b border-gray-200 pb-4 md:pb-6">
          <h3 className="font-bold mb-3 md:mb-4 text-gray-700 uppercase tracking-wide">Category</h3>
          <ul className="space-y-3 md:space-y-4">
            {categories.map((cat) => (
              <li key={cat}>
                <label htmlFor={`category-${cat}`} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id={`category-${cat}`}
                    className="form-checkbox h-4 w-4 md:h-5 md:w-5 text-purple-600 rounded focus:ring-purple-500 transition-colors duration-200"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                  />
                  <span className="ml-3 md:ml-4 text-sm md:text-base font-medium text-gray-700 capitalize">
                    {cat.replace("-", " ")}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-6 md:mb-8 border-b border-gray-200 pb-4 md:pb-6">
          <h3 className="font-bold mb-3 md:mb-4 text-gray-700 uppercase tracking-wide">Price</h3>
          <ul className="space-y-3 md:space-y-4">
            {priceRanges.map((price) => (
              <li key={price.id}>
                <label htmlFor={`price-${price.id}`} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    id={`price-${price.id}`}
                    name="price"
                    className="form-radio h-4 w-4 md:h-5 md:w-5 text-purple-600 focus:ring-purple-500 transition-colors duration-200"
                    checked={selectedPrice === (price.id === "all" ? "" : price.id)}
                    onChange={() => handlePriceChange(price.id)}
                  />
                  <span className="ml-3 md:ml-4 text-sm md:text-base font-medium text-gray-700">
                    {price.label}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* On Sale Filter */}
        <div>
          <h3 className="font-bold mb-3 md:mb-4 text-gray-700 uppercase tracking-wide">On Sale</h3>
          <label htmlFor="on-sale-only" className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="on-sale-only"
              className="form-checkbox h-4 w-4 md:h-5 md:w-5 text-purple-600 rounded focus:ring-purple-500 transition-colors duration-200"
              checked={onSaleOnly}
              onChange={() => setOnSaleOnly(!onSaleOnly)}
            />
            <span className="ml-3 md:ml-4 text-sm md:text-base font-medium text-gray-700">
              Show only discounted products
            </span>
          </label>
        </div>
      </aside>
    </>
  );
}

export default FilterSidebar;
