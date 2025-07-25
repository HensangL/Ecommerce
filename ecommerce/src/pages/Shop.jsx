import React from 'react'
import { Products } from '../components/Products'
import ProductCard from '../components/ProductCard'
function Shop() {
  return (
    <div className='grid grid-cols-3 gap-5'>
        {
    Products.map((product, key) => (
     <ProductCard key={key} data={product}/>
    ))
  }

    </div>
  )
}

export default Shop
