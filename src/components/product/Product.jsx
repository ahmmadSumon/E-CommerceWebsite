// Product.jsx
import React from 'react';
import "./product.css"
import { Button } from '@mui/material';
const Product = ({ id, title, price , image,description}) => {
  return (
    <div>
      
    <div className="container">
     
     <div className='product'>
       <div className="img">
         <img src={image} alt="" />
        
       </div>
       <h5>{title}</h5>
       <p>{description}</p>
       <div className="bottom">
       <h6>${price}</h6>
  <Button>Add to cart</Button>
       </div>
      
      
     </div>
     </div>
    </div>


  );
};

export default Product;
