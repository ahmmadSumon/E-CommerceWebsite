import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      
    </div>
  )
}

export default App