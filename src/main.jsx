import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,Route, Routes,createRoutesFromElements
} from "react-router-dom";
<About/>

import Home from './Pages/home/Home.jsx'
import Blog from './blog/Blog.jsx';
import About from './Pages/about/About.jsx';


// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Shop from './components/shop/Shop.jsx';
import Cart from './Pages/cart/Cart.jsx'
import ProductDetails from './Pages/productDetails/ProductDetails.jsx';
import { CartProvider } from './context/Context.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About/>} />
      <Route  path="shop" element={<Shop/>}/>
      
      <Route  path="cart" element={<Cart/>}/>
      
      <Route path="product/:id" element={<ProductDetails/> }/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<CartProvider>
<RouterProvider router={router} />
</CartProvider>
   
  </React.StrictMode>,
)
