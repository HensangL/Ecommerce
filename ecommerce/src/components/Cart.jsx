import React from 'react'
import {Link} from 'react-router-dom'
const Cart = (props) => {
    const {id,name,price,description,image,slug} = props.data;
  return (
    <div>  
        <Link to={slug}>
        <img src={image} className='w-100 h-80 object-cover object-top drop-shadow-amber-800' />
        </Link>
    </div>
  )
}

export default Cart