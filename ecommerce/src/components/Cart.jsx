import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const { id, name, price, description, image, slug } = props.data;

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition duration-300">
      <Link to={slug}>
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover object-top mb-3"
        />
      </Link>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-700">${price}</p>
      <p className="text-sm text-gray-500">{description}</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
