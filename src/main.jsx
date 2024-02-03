import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';






import Home from './home/Home.jsx'
import Blog from './blog/Blog.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/blog", element:<Blog/>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
