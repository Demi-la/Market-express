import React from "react";
import { FaPen } from "react-icons/fa";
import {AiOutlineLock} from 'react-icons/ai'
import "./AccountDetails.css";

const AccountDetails = () => {
  return (
    <>
      <div className="details_section">
        <div className="details_container">
          <h4>Account Details</h4>
          <div className="details_wrapper">
            <div className="details_text">
              <p>Mustapha Majeedah</p>
              <p>omatiwa2008@gmailcom</p>
            </div>
          </div>
        </div>
        <div className="number__container">
          <p>
            PHONE NUMBERS <FaPen  className="details__icon"/>
          </p>
          <div className="number__wrapper">
            <div className="numbers">
              <p>09080520324</p>
              <p>08158985264</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="address__container">
          <p>ADDRESS < FaPen className="details__icon"/></p>
          <div className="address__wrapper">
              <p>No 2, Church Street, Akoka Lagos State.</p>
          </div>
        </div>

        <div className="password__container">
          <p>Change password</p>
          <div className="password__wrapper">
            <div className="passwords">
            <div className="old">
           <label>Old Password</label>
            <input
              className="password__input"
               type='password' 
               name="password" 
               placeholder="Enter password "
               
            />
           </div>

           <div className="new">
           <label>new Password (minimum of 8 characters)</label>
            <input
                 className="password__input"
               type='password' 
               name="password" 
               placeholder="Enter password"
            />
            <p>(Use alphabets, numbers and characters)</p>
           </div>

           
           <div className="confrim">
           <label>Confirm Password</label>
            <input
               className="password__input"
               type='password' 
               name="password" 
               placeholder="Enter password"
            />
           </div>

          </div>
        </div>
        </div>
      </div>

     <button  id="logout">LOGOUT</button>

    </>
  );
};

export default AccountDetails;
