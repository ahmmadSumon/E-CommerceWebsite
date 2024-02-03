import React, { useState } from 'react'
import '../dropDown/dropDown.css'
import { IoIosArrowDropdown } from "react-icons/io"; 
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import ReactDOM from 'react-dom';

const DropDown = ({placeholder,data}) => {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const [dropIndex, setDropIndex] = useState(0)
  const [dropItem, setdropItem] = useState(placeholder)
  const [listData, setListData] = useState(data)
  const [listData2, setListData2] = useState(data)


  const openDrop =()=>{
    setIsOpenDrop(!isOpenDrop)
  }
  const closeDrop = (index,name)=>{
    setIsOpenDrop(false)
    setDropIndex(index)
    setdropItem(name)
  }
const filterData = (e)=>{
 const keyWord = e.target.value.toLowerCase();
 
 const list = listData2.filter((item)=> {
  return item.toLowerCase().includes(keyWord)
 })
 
 const list2 = list.filter((item,
  index) => list.indexOf(item) === index);
  
  setListData(list2)

}
  



  return (
    <ClickAwayListener onClickAway={setIsOpenDrop}>
 <div className="selectDrop position-relative ">
   <span onClick={openDrop}>
   {dropItem.length > 14 ? dropItem.substr(0,14)+'...' : dropItem } <IoIosArrowDropdown />
   </span>
   {isOpenDrop===true && 
     <div className='selectDropSec'>
     <div className="searchField">
         <input type="text" placeholder='Search Here ' onChange={ filterData}/>
     </div>
     <ul className='dropResults'>
     <li key={0} onClick={()=> closeDrop(0 ,placeholder)}   
             className={`${dropIndex === 0 ? 'active' : ''}`}>

              {placeholder}

             </li>
         {listData.map((item,index )=>{
             return (<li key={index+1} onClick={()=> closeDrop(index+1 ,item)}   
             className={`${dropIndex === index+1 ? 'active' : ''}`}>

              {item}

             </li>)
                    
         })}

         
     </ul>
    </div>
   }
 </div>  
    
    </ClickAwayListener>

  )
}

export default DropDown