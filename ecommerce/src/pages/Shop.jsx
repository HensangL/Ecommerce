import React from 'react'
import { Products } from '../components/Products'
import ProductCard from '../components/ProductCard'

function Shop() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 mt-20 min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Products.map((product, key) => (
          <ProductCard key={key} data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop
