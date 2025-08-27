import React from 'react';

function Sidebar({
  selectedCategories,
  setSelectedCategories,
  selectedPrice,
  setSelectedPrice,
  onSaleOnly,
  setOnSaleOnly
}) {

  const categories = ["drinks", "fragrance", "personal-care", "cosmetics", "others"];

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="w-64 p-4 bg-gray-50 border-r border-gray-200 h-full">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Category */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat}>
              <input
                type="checkbox"
                id={cat}
                className="mr-2"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              <label htmlFor={cat}>{cat}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price</h3>
        <ul className="space-y-1">
          <li>
            <input
              type="radio"
              id="under100"
              name="price"
              className="mr-2"
              checked={selectedPrice === 'under100'}
              onChange={() => setSelectedPrice('under100')}
            />
            <label htmlFor="under100">Under $100</label>
          </li>
          <li>
            <input
              type="radio"
              id="100-250"
              name="price"
              className="mr-2"
              checked={selectedPrice === '100-250'}
              onChange={() => setSelectedPrice('100-250')}
            />
            <label htmlFor="100-250">$100 - $250</label>
          </li>
          <li>
            <input
              type="radio"
              id="251-500"
              name="price"
              className="mr-2"
              checked={selectedPrice === '251-500'}
              onChange={() => setSelectedPrice('251-500')}
            />
            <label htmlFor="251-500">$251 - $500</label>
          </li>
          <li>
            <input
              type="radio"
              name="price"
              className="mr-2"
              checked={selectedPrice === ''}
              onChange={() => setSelectedPrice('')}
            />
            <label>All</label>
          </li>
        </ul>
      </div>

      {/* On Sale */}
      <div>
        <h3 className="font-semibold mb-2">On Sale</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={onSaleOnly}
            onChange={() => setOnSaleOnly(!onSaleOnly)}
          />
          Show only discounted products
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
