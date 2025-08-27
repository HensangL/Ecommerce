import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Detail from '../components/Detail'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ShoppingCart from '../components/ShoppingCart'
import Products from '../pages/Products'
import Sidebar from '../components/Sidebar'
function Routing() {
  return (
    <div>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/:slug" element={<Detail />} />
      <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<ShoppingCart/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/sidebar" element={<Sidebar/>}/>

        </Routes>
    </div>
  )
}

export default Routing
