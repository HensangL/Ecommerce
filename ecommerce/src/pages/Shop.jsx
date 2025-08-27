import React from 'react';
import ProductCard from '../components/ProductCard';

function Shop({ products = [], selectedCategories = [], selectedPrice = '', onSaleOnly = false }) {

  const filteredProducts = products.filter(product => {
    // 1️⃣ Category filter
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);

    // 2️⃣ Price filter
    let priceMatch = true;
    if (selectedPrice === 'under100') priceMatch = product.price < 100;
    else if (selectedPrice === '100-250') priceMatch = product.price >= 100 && product.price <= 250;
    else if (selectedPrice === '251-500') priceMatch = product.price >= 251 && product.price <= 500;

    // 3️⃣ On Sale filter
    const saleMatch = !onSaleOnly || product.onSale;

    return categoryMatch && priceMatch && saleMatch;
  });

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 mt-20 min-h-screen bg-gray-100 flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} data={product} />
          ))
        ) : (
          <p className="col-span-full text-gray-500">No products match your filters.</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
