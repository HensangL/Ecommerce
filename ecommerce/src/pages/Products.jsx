import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Shop from './Shop';
import { Products as ProductsData } from '../components/Products';

function Products() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [onSaleOnly, setOnSaleOnly] = useState(false);

  return (
    <div className='flex mt-16'>
      <Sidebar 
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        onSaleOnly={onSaleOnly}
        setOnSaleOnly={setOnSaleOnly}
      />
      <Shop
        products={ProductsData}
        selectedCategories={selectedCategories}
        selectedPrice={selectedPrice}
        onSaleOnly={onSaleOnly}
      />
    </div>
  );
}

export default Products;
