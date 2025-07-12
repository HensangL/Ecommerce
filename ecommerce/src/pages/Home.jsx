import React from 'react'
import Herosection from '../homepage/Herosection'
import Carousel from '../homepage/Carousel'

function Home() {
  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <Carousel/>
        <Herosection/>
    </div>
    </>
  )
}

export default Home