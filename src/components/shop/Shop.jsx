// Shop.jsx
import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import { fetchProducts } from '../../services/ApiService';
import './shop.css'
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <h3>Shopping Items</h3>
    <div className='shopProduct'>
 {loading ? (
   <p>Loading...</p>
 ) : (
   products.map((product) => (
     <Product key={product.id} {...product} />
   ))
 )}
</div>
    </div>










  );
};

export default Shop;
