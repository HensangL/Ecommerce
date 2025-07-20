import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Detail from '../components/Detail'

function Routing() {
  return (
    <div>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/:slug" element={<Detail />} />
        </Routes>
    </div>
  )
}

export default Routing
