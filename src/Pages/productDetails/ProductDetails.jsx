// ProductDetails.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../services/ApiService';
import { Button, Select, MenuItem, FormControl, InputLabel, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import './productDetails.css'
import { CartContext } from '../../context/Context';

const ProductDetails = () => {
  const { cartItems, addToCart, removeFromCart, clearCart,
    getCartTotal } = useContext(CartContext)
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [selectedSize, setSelectedSize] = useState('Small'); // Default size
  const [selectedColor, setSelectedColor] = useState('Red'); // Default color
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const data = await fetchProductDetails(id);
        setProductDetails(data);
        console.log(productDetails)
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  const { title, price, image, description } = productDetails;
  const sizes = ['Small', 'Medium', 'Large', 'XL']; // Manually defined sizes
  const colors = ['Red', 'Blue', 'Green', 'Yellow']; // Manually defined colors

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container productDetails">
      <div className="row productDetailsData d-flex ">
        <div className="details col-md-6">
          <img src={image} alt="" />
          <h5 className='title'>{title}</h5>
          <p className=' productDescription'>{description}</p>
          <h6>${price}</h6>
        </div>
        <div className=' col-md-6' >
         
  
          <div className="detailsImplementation d-flex flex-column gap-5">
           
            <div className="size d-flex  g-5">
              <FormControl className=''>
                <h3>Size:</h3>
                <InputLabel id="size-label"></InputLabel>
                <Select
                  labelId="size-label"
                  id="size-select"
                  value={selectedSize}
                  onChange={handleSizeChange}
                >
                  {sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="color">
              <FormControl className=' '>
              <h3>Color:</h3>
                <InputLabel id="color-label"></InputLabel>
                <Select
                  labelId="color-label"
                  id="color-select"
                  value={selectedColor}
                  onChange={handleColorChange}
                >
                  {colors.map((color) => (
                    <MenuItem key={color} value={color}>
                      {color}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="quantity d-flex text-center align-items-center gap-3">
              <IconButton onClick={handleQuantityDecrease}>
                <RemoveIcon />
              </IconButton>
              <span>{quantity}</span>
              <IconButton onClick={handleQuantityIncrease}>
                <AddIcon />
              </IconButton>
            </div>
            <div className='d-flex gap-5'>
            <Button className='btn-bg'>Buy Now</Button>
              <Button  onClick={ addToCart}>Add to cart</Button>
            </div>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
