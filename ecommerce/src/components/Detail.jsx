import React from 'react';
import { useParams } from 'react-router-dom';
import { Products } from './Products.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/Cart';

const Detail = () => {
  const { slug } = useParams();
  const product = Products.find(p => p.slug === slug);
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: product.id,
      quantity: 1,
      name: product.name,
      image: product.image
    }));
  };

  return (
    <div className="container mx-auto mt-20 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button onClick={handleAddToCart} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
