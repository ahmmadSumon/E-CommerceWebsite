import React, { useState, useEffect } from 'react'
import logo from "../../assets/images/logo/logo.png"
import '../navbar/navBar.css'
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { VscSignIn } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import DropDown from '../dropDown/DropDown';
import { IoGitCompareOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import { TbReorder } from "react-icons/tb";
import axios from 'axios';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import NavSection from '../navSection/NavSection';
import { Link } from 'react-router-dom';



const NavBar = () => {
const [categories, setCategories] = useState(['Milks & Diaries','Clothing and Beatuy','Fast Food','Pet Foods','Vegetables','Baking and Maerials','Fresh Fruits','Bread And juice','Wines & Drinks','Honey','Groceries','Kids Items'
  
])
const [isDropWownOpen, setIsDropDownOpen] = useState(false)

const countriesData = [];
const handleClickAway = () => {
  setIsDropDownOpen(false);
};

useEffect(() => {
  getCountry('https://countriesnow.space/api/v0.1/countries')
}, []);
const getCountry = async(url)=>{
  try{
  await axios.get(url).then((res)=>{
    if(res !== null){
      res.data.data.map((item,index)=>{
        countriesData.push(item.
        country)
      
      
      })
    }
    
  })
  }
  catch{

  }
}
  return (
  <>
      <header>
        <div className=" container-fluid">
          <div className="row navRow">
          <div className="logo col-sm-2">
            <img src={logo} alt="" />
          </div>
          
          <div className="middle col-sm-5 ">
            <div className="searchBar d-flex align-items-center  ">
                <DropDown
                placeholder = {'All Categories'}
                data= {categories}
                />
             
             
             
              <div className="inputBar">
                <input type="text" placeholder='search your products'/>
                <CiSearch />
              </div>
            </div>
          </div>

          <div className="last col-sm-5 d-flex align-items-center">
            <div className="location d-flex align-items-center g-2">
            <CiLocationOn />
           <DropDown  placeholder={"Your Location"} data = {countriesData}/>
            </div>
           
            <div className="navLast list list-inline mb-0 ">
         
         
              <ul className='d-flex gap-4'>
              
                <li  className="compare inline-list-item
                 ">
                  <span><IoGitCompareOutline  className='navIcon' />Compare
                  <span className='badge bg-success rounded-circle'>3</span>
                  </span>
                  </li>
                <li  className="wishList">
                  <span><FaRegHeart  className='navIcon'/> Wishlist  <span className='badge bg-success rounded-circle'>3</span></span></li>
            
             <li    className="cart">
             <Link to='cart' >
              <span><MdOutlineShoppingCart  className='navIcon'/>  Cart 
              <span className='badge bg-success rounded-circle'>2</span></span>  </Link></li>
              
                <li  className="account">
                  <span onClick={()=>{setIsDropDownOpen(!isDropWownOpen)}}> <VscAccount  className='navIcon' /> 
                  Account  </span>
                   </li>
            
              
             
         {
          isDropWownOpen && (
            <ClickAwayListener onClickAway={handleClickAway}>
                <ul className='dropDownAccount'>
                  <li>  <Button><MdOutlineAccountCircle />Account</Button> </li>
                  <li><Button><TbReorder /> Claim Order</Button></li>
                  <li><Button><RiCustomerService2Fill /> Services</Button></li>
                  <li><Button> <VscSignIn /> Sign Up</Button></li>
                  <li><Button><MdLogout />Log Out</Button></li>
              
              
                </ul>
                </ClickAwayListener>
                    )
                  }
                  </ul>
 
   
 








              </div>
         
          </div>
          </div>
        </div>
      </header>
      <NavSection/>
      </>
  )
}

export default NavBar