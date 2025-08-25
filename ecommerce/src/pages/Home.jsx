import React from 'react'
import Carousel from '../homepage/Carousel'
import Shop from '../pages/Shop'


function Home() {
  return (
    <>
    <div className=''>
        <Carousel/>
         <p className='font-bold text-5xl ml-0'>
          Available products.
        </p>
        <Shop/>
       
        
    </div>
    </>
  )
}

export default Home