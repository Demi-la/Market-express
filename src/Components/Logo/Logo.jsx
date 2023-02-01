import React from 'react'
import Logoimage from '../../Assets/Logoimage.png'
import {BiHelpCircle} from 'react-icons/bi'
import {IoIosArrowDown} from 'react-icons/io'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsBoxArrowInRight} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import './Logo.css'

const Logo = () => {
  return (
    <div className='nav__logo'>
      <img src={Logoimage} alt='/'/>
      <div className='logo_input'>
        <AiOutlineSearch className='nav__icon'/>
      <input type="text" placeholder="Search.." />
      <button id='input__button'>search</button>
     
      </div>
      <div className='logo_list'>
      <ul>
        <li className='lists'>
         <p><BiHelpCircle className='nav__icon'/> Help <IoIosArrowDown className='nav__icon'/></p>
        </li>
        <li className='lists'>
            <p><AiOutlineShoppingCart className='nav__icon'/>cart</p>
        </li>
      </ul>
      </div>
     
       <button className='logo_btn'>Login/Sign Up<BsBoxArrowInRight/></button>
       {/* <div className="gradient" style={{height:'500px',border:'2px solid red',width:"500px" }}>

       </div> */}
       
    </div>

  )
}

export default Logo
