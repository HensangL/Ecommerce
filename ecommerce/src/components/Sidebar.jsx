import React, { useState } from "react";

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
      {/* Mobile Toggle Button */}
      <button
        className="w-full md:hidden py-3 px-6 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition-colors duration-200 mb-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {isOpen ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Sidebar Content */}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-full md:w-64 lg:w-72 p-4 md:p-6 lg:p-8 bg-white border border-gray-200 rounded-2xl shadow-lg transition-transform duration-300 ease-in-out md:h-auto md:sticky md:top-8`}
      >
        <h2 className="text-xl md:text-2xl font-extrabold mb-6 md:mb-8 text-gray-800">Filters</h2>

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
