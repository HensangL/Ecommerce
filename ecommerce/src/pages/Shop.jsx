import React from 'react'
import { Products } from '../components/Products'
import ProductCard from '../components/ProductCard'
function Shop() {
  return (
    <div className='grid grid-cols-5 gap-5 mt-20  items-center justify-center min-h-screen bg-gray-100'>
        {
    Products.map((product, key) => (
     <ProductCard key={key} data={product}/>
    ))
  }

    </div>
  )
}

export default Shop
