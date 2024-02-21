import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../catSlider/catSlider.css"
const CatSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll:3,
        arrows:true ,
       
      
      };
  return (
<div>
  <div className="container-fluid catSlider">
  <h2>Catagories</h2>
  <Slider {...settings} className='sliderCatMain'>
<div className="item">
 <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-421/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/fruitsAndVegs.png?q=low&webp=1" alt="" />
 <h5>Fruits & Vegetable</h5>
</div>
<div className="item">
<img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-421/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/meatAndFish.png?q=low&webp=1" alt="" />
  <h5>Fruits & Vegetable</h5>
 </div>
 <div className="item">
    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-421/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/cooking.png?q=low&webp=1" alt="" />
     <h5>Fruits & Vegetable</h5>
 </div>
 <div className="item">
    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-421/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/beverages.png?q=low&webp=1" alt="" />
     <h5>Fruits & Vegetable</h5>
 </div>
 <div className="item">
    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-421/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/pest-control.png?q=low&webp=1" alt="" />
     <h5>Fruits & Vegetable</h5>
 </div>
 <div className="item">
    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-421/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/beauty.png?q=low&webp=1" alt="" />
     <h5>Fruits & Vegetable</h5>
 </div>
 <div className="item">
    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-421/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/healthCare.png?q=low&webp=1" alt="" />
     <h5>Fruits & Vegetable</h5>
 </div>
 <div className="item">
    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-421/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/petFood.png?q=low&webp=1" alt="" />
     <h5>Fruits & Vegetable</h5>
 </div>
 <div className="item">
    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-421/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/baby-care.png?q=low&webp=1" alt="" />
     <h5>Fruits & Vegetable</h5>
 </div>
 <div className="item">
     <img src="https://chaldn.com/asset/Egg.
ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0
+Deploy-Release-421/Default/stores/chaldal/
components/landingPage2/
LandingPageCategories/images/categories/
fruitsAndVegs.png?q=low&webp=1" alt="" />
     <h5>Fruits & Vegetable</h5>
 </div>
 <div className="item">
     <img src="https://chaldn.com/asset/Egg.
ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0
+Deploy-Release-421/Default/stores/chaldal/
components/landingPage2/
LandingPageCategories/images/categories/
fruitsAndVegs.png?q=low&webp=1" alt="" />
     <h5>Fruits & Vegetable</h5>
 </div>
 <div className="item">
     <img src="https://chaldn.com/asset/Egg.
ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0
+Deploy-Release-421/Default/stores/chaldal/
components/landingPage2/
LandingPageCategories/images/categories/
fruitsAndVegs.png?q=low&webp=1" alt="" />
     <h5>Fruits & Vegetable</h5>
 </div>
 <div className="item">
     <img src="https://chaldn.com/asset/Egg.
ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0
+Deploy-Release-421/Default/stores/chaldal/
components/landingPage2/
LandingPageCategories/images/categories/
fruitsAndVegs.png?q=low&webp=1" alt="" />
     <h5>Fruits & Vegetable</h5>
 </div>



            </Slider>
        </div>
    </div>
  )
}

export default CatSlider