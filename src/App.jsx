import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App