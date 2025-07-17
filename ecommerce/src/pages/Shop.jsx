import React from 'react'
import { Products } from '../components/Products'
import Cart from '../components/Cart'
function Shop() {
  return (
    <div className='grid grid-cols-3 gap-5'>
        {
    Products.map((product, key) => (
     <Cart key={key} data={product}/>
    ))
  }

    </div>
  )
}

export default Shop
