import React from 'react';
import {MdOutlineDeliveryDining} from 'react-icons/md';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {RiPriceTagLine} from 'react-icons/ri';

import "./Newsletter.css"

const Newsletter = () => {
  return (
    <>
      <div className='newsletter__container'>
        <div className='newsletter__wrapper'>
            <h5>Why us?</h5>
            <div className='letter'>
                <h5>Newsletter</h5>
                <p>Get the latest deals with our monthly newsletter</p>
            </div>
        </div>
        <div className='newsletter__icons'>
        <div className='newsletter__icon'>
          <div className='newsletter delivery'>
             <MdOutlineDeliveryDining className='iconss'/>
              <p>Timely Delivery</p>
          </div>
          <div className='newsletter service'>
          <RiCustomerService2Fill className='iconss'/>
          <p>Best Services</p>
          </div>
          <div className='newsletter prices'>
          <RiPriceTagLine className='iconss'/>
          <p>Unbeatable Prices</p>
          </div>
        </div>
        <div className='logo_input'>
            <input  type="text" placeholder="Input Email"/>
            <button id='input__button'>Subscribe</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Newsletter
