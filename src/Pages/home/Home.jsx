import React from 'react'
import HomeSlider from './homeSlider/HomeSlider'
import '../home/home.css'
import CatSlider from '../../components/catSlider/CatSlider'
import Shop from '../../components/shop/Shop'
Shop
const Home = () => {
  return (
<div className= "homeDiv">
<HomeSlider/>
<CatSlider/>
<Shop/>
    </div>
  )
}

export default Home