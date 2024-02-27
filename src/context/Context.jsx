import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
  const addTocart = (item) => {
    console.log('Adding item to cart:', item);
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (isItemInCart) {
      console.log('Item is already in cart. Updating quantity.');
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      console.log('Item is not in cart. Adding new item.');
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  

  const removeFromCart = (item) => {
    const isItemsInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemsInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  useEffect(() => {
    console.log('Initial cartItems state:', cartItems);
  }, []);
  
  useEffect(() => {
    console.log('Updating localStorage with cartItems:', cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addTocart, removeFromCart, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
