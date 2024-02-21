import React, { useState } from 'react'
import Product from '../../components/product/Product'

const Cart = () => {
    const [cart, setCart] = useState(0)
  return (
    <div className='container'>
          <h3>Cart Item</h3>
        {
        cart > 0 ? <Product/> : <p>There is no product here</p>
        }
      


    </div>
  )
}

export default Cart