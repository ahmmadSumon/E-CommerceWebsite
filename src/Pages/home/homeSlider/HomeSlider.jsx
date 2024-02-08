import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeSlider = () => {
   
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
        return (
           <div className="container-fluid ">
                    <Slider {...settings} className='sliderMain'>
                      <div>
                      <img className='' src="https://images.pexels.com/photos/20116329/pexels-photo-20116329/free-photo-of-postal-altiplano-chileno.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                      </div>
                      
                    
                    
                      
                    </Slider>
          </div>
        );
      }


export default HomeSlider