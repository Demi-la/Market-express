import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logoimage from "../../../Assets/Logoimage.png";
import { BiHelpCircle } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { AiOutlineSearch } from "react-icons/ai";
import {RiAccountCircleLine} from 'react-icons/ri'




const Account_logo = () => {

  const navigate = useNavigate()

  return (
    <div className="account__logo">
    <div className="nav__logo">
      <img src={Logoimage} alt="/" />
      <div className="logo_input">
        <AiOutlineSearch className="nav__icon" />
        <input type="text" placeholder="Search.." />
        <button id="input__button">search</button>
      </div>
      <div className="logo_list">
        <ul>
          <li className="lists">
            <p>
              <BiHelpCircle className="nav__icon" /> Help
              <IoIosArrowDown className="nav__icon" />
            </p>
          </li>
          <li className="lists">
            <p>
              <AiOutlineShoppingCart className="nav__icon" />
              cart
            </p>
          </li>
          <li className="lists">
            <p onClick={() => navigate('/Account')}>
              <RiAccountCircleLine className="nav__icon" />
               Account
           
            </p>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Account_logo
