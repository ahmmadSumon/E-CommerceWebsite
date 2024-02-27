import React from 'react';
import "./product.css"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/Context';
import { useContext } from 'react';

const Product = ({ id, title, price, image, description }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`product/${id}`);
  }

  return (
    <div>
      <div className="container" onClick={handleClick}>
        <div className='product' >
          <div className="img">
            <img src={image} alt="" />
          </div>
          <h5>{title}</h5>
          <p>{description}</p>
          <div className="bottom">
            <h6>${price}</h6>
            <Button onClick={addToCart}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
