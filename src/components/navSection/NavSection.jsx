import React from 'react'
import './navSection.css'
import Button from '@mui/material/Button';
import { BsGrid } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io"; 
import { Link } from 'react-router-dom';
import { RiCustomerServiceLine } from "react-icons/ri";

const NavSection = () => {
  return (
    <div>
        <div className="container-fluid navsection">
            <div className="row navsection-row d-flex align-content-center ">
                <div className="col-sm-3 part-1 d-flex align-items-center">
                   <Button ><BsGrid /> &nbsp; Browse All Categories &nbsp; <IoIosArrowDropdown/></Button>
                </div>
                <div className="col-sm-7  part-2 ">
    <ul className='list list-inline mb-0'>
        <li 
        className='list-inline-item'><
        Button><Link>Deals</Link></
        Button></li>
        <li className='list-inline-item home'><Button><Link>Home <IoIosArrowDropdown/></Link></Button>
        </li>
        <li className='list-inline-item'><Button><Link to='about'>About</Link></Button></li>
        <li className='list-inline-item'><Button><Link  to='shop'>Shop</Link></Button></li>
        <li className='list-inline-item'><Button><Link>Vendors<IoIosArrowDropdown/></Link></Button>
        <div className="dropdown_menu ">
          <ul>
              <li><Button><Link>Home</Link></Button></li>
              <li><Button><Link>About</Link></Button></li>
              <li><Button><Link>Contact</Link></Button></li>
              <li><Button><Link>Products</Link></Button></li>
              <li><Button><Link>Services</Link></Button></li>
              
              <li><Button><Link>Delivery</Link></Button></li>
              <li><Button><Link>Hotline</Link></Button></li>
              <li><Button><Link>Customers</Link></Button></li>
          </ul>
      </div>
        </li>
        <li className='list-inline-item '><Button><Link>Mega menu <IoIosArrowDropdown/></Link></Button>
        <div className="dropdown_menu mega_menu w-100">
           
           </div>
                 
        
        </li>
        <li className='list-inline-item'><Button><Link>Blog <IoIosArrowDropdown/></Link></Button></li>
        <li className='list-inline-item pages'><Button><Link>Pages <IoIosArrowDropdown/></Link></Button>
        
                <div className="dropdown_menu ">
                    <ul>
                        <li><Button><Link>Home</Link></Button></li>
                        <li><Button><Link>About</Link></Button></li>
                        <li><Button><Link>Contact</Link></Button></li>
                        <li><Button><Link>Products</Link></Button></li>
                        <li><Button><Link>Services</Link></Button></li>
                        
                        <li><Button><Link>Delivery</Link></Button></li>
                        <li><Button><Link>Hotline</Link></Button></li>
                        <li><Button><Link>Customers</Link></Button></li>
                    </ul>
                </div>

        </li>
        <li className='list-inline-item'><Button><Link>Contact</Link></Button></li>
        
       
    </ul>
                </div>
                <div className="col-sm-2 part-3 ">
<div className="phnNum d-flex align-items-center g-3">
    <span><RiCustomerServiceLine /></span>
    <div className="text">
        <h4 className='mb-0'>01751260010</h4>
        <p className='mb-0' >24/7 service available</p>
    </div>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavSection