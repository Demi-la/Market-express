import React from "react";
import Logoimage from "../../Assets/Logoimage.png";
import { BiHelpCircle } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { AiOutlineSearch } from "react-icons/ai";
import {RiAccountCircleLine} from 'react-icons/ri'
import Nav from '../landing_page/Nav/Nav'
import  {IoIosArrowForward} from 'react-icons/io'
import AccountDetails from "../Account_page/AccountDetails/AccountDetails";
import Whyus from '../landing_page/Whyus/Whyus'
import Newsletter from '../landing_page/Newsletter/Newsletter'
import Footer from '../landing_page/Footer/Footer'
import "./Account.css";

const Account = () => {
  return (
    <>
      <div className="account__container">
        <div className="account__wrapper">
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
                    <p>
                      <RiAccountCircleLine className="nav__icon" />
                       Account
                   
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="account_nav">
             <Nav/>
          </div>
          <div className="account_home">
          <p>Home<IoIosArrowForward/> <a href="/">Contact us</a></p>
          <h1>Account</h1>
          </div>
          <AccountDetails/>
          
          <Whyus/>
          <Newsletter/>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Account;
