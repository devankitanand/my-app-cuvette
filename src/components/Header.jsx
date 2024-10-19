import React from 'react'
import logo from '../assets/logo.png'
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <div className='headerwrap'>
      <Link to='/'><div><img src={logo} alt='logo' height={40}/></div></Link>
    
    <div className='wrapperuserinfo'>
    <div className='contact'>Contact</div>
    <div className='userinfo'>
        <div className='usericon'><FaRegUserCircle/></div>
        <div className='username'>Ankit Anand</div>
        <div className='usericon'><IoMdArrowDropdown/></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Header