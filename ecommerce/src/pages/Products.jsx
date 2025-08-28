import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Shop from './Shop';
import { Products as ProductsData } from '../components/Products';

function Products() {
  const location = useLocation();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [onSaleOnly, setOnSaleOnly] = useState(false);

  // Handle category filter from navigation state
  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategories([location.state.selectedCategory]);
    }
  }, [location.state]);

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
