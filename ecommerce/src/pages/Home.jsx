import React from 'react'
import Carousel from '../homepage/Carousel'
import Shop from '../pages/Shop'


function Home() {
  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <Carousel/>
        <Shop/>
        
    </div>
    </>
  )
}

export default Home