import React from 'react'
import './footer.css'
import footerImg from "../../assets/images/logo/logo.png"
const Footer = () => {
  return (
    <div>
        <footer>
  <div className="container">
    <div className="row footer-row">
      <div className="col-md-4 footer-col-left">
        <img className=" pointer-event" src={footerImg} alt="" />
        <p>
          Design amazing digital experiences that <br /> create more happy in th
        </p>
      </div>
      <div className="col-md-4">
        <h5>Pages</h5>
        <div className="link">
          {" "}
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About us</a>
          <a href="#">Extra Sales/ Landingpage</a>
          <a href="#">Free guide</a>
        </div>
      </div>
      <div className="col-md-4">
        <h5>Contact</h5>
        <div className="link">
          <a href="#">+123 456 789</a>
          <a href="#">hello@gmail. com</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer