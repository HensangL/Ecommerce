import React from 'react'
import ProductCard from '../components/Productcard'
import img from '../image/product.jpg'
function Herosection() {
  return (
    <div className='flex gap-3'>
        <ProductCard name="hello" image={img} price="200" title="Water bottle"/>
        <ProductCard name="hello" image={img} price="200" title="Water bottle"/>
        <ProductCard name="hello" image={img} price="200" title="Water bottle"/>
        <ProductCard name="hello" image={img} price="200" title="Water bottle"/>
        


    </div>
  )
}

export default Herosection