import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../homeSlider/homeSlider.css"

import slide1 from '../../../assets/images/bg-img/04.jpg'
import slide2 from '../../../assets/images/bg-img/05.jpg'
import slide3 from '../../../assets/images/bg-img/06.jpg'
import { Button } from '@mui/material';



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true 
  };
  return (
    <div className="sliderHome">
      <div className="container-fluid">
      <Slider {...settings} className='sliderHomeMain'>
     <div className="item">
       <img src= {slide2} className='w-100' alt="" />
       <div className="info">
        <h1>Fresh Vegetable <br /> Get now</h1>
        <h4>Sign up for daily newsletter</h4>
        <form action="">
          <input type="text" placeholder='Enter your mail here'/>
          
          <Button>Subscribe</Button>
        </form>
       </div>
       </div> 
       <div className="item">
   <img src= {slide1} 
className='w-100' alt="" />
          <div className="info">
  <h1>Fresh Vegetable <br /> Get now</h1>
  <h4>Sign up for daily newsletter</h4>
  <form action="">
    <input type="text" placeholder='Enter your mail 
here'/>
    
    <Button>Subscribe</Button>
  </form>
 </div>
   </div> 
   
   <div className="item">
   <img src= {slide3} 
className='w-100' alt="" />
 <div className="info">
  <h1>Fresh Vegetable <br /> Get now</h1>
  <h4>Sign up for daily newsletter</h4>
  <form action="">
    <input type="text" placeholder='Enter your mail 
here'/>
    
    <Button>Subscribe</Button>
  </form>
 </div>
   </div> 
   </Slider>

      </div>
 
    </div>


  );
}