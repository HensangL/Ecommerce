import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; // Cart icon
import {useSelector} from 'react-redux'


const Cart = (props) => {
  const carts= useSelector((state)=> state.cart.items)
  console.log(carts); 
  const { id, name, price, description, image, slug } = props.data;

  return (
    <div className="bg-white p-5  rounded-xl shadow-sm mt-20">
      <Link to={slug}>
  <div className="flex justify-center items-center w-full">
    <img
      src={image}
      alt={name}
      className="object-fill w-[80%] h-64 rounded-xl mb-4"
    />
  </div>
</Link>

      <h2 className="text-xl  text-center text-blue-800 mb-1">{name}</h2>
      <p className="text-blue-600 text-lg font-medium mb-1">${price}</p>
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">{description}</p>
        <button className="ml-2 p-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-200">
          <ShoppingCart size={16} /> {/* Smaller icon */}
        </button>
      </div>
    </div>
  );
};

export default Cart;
