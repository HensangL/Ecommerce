import React from 'react'
import Shop from './Shop'
import Sidebar from '../components/Sidebar'
function Products() {
  return (
    <div className='flex'>
        <Sidebar/>
        <Shop/>
    </div>
  )
}

export default Products