import React from "react";
import Account_logo from "./Account_logo/Account_logo";
import Nav from '../landing_page/Nav/Nav'
import  {IoIosArrowForward} from 'react-icons/io'
import AccountDetails from "./AccountDetails/AccountDetails";
import Whyus from '../landing_page/Whyus/Whyus'
import Newsletter from '../landing_page/Newsletter/Newsletter'
import Footer from '../landing_page/Footer/Footer'
import "./Account.css";

const Account = () => {
  return (
    <>
      <div className="account__container">
        <div className="account__wrapper">
        
          <Account_logo/>
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
