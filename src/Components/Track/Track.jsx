import React from 'react'
import Account_logo from '../Account/Account_logo/Account_logo'
import Nav from '../landing_page/Nav/Nav'
import {IoIosArrowForward} from 'react-icons/io'
import './Track.css'
import Whyus from '../landing_page/Whyus/Whyus'
import Newsletter from '../landing_page/Newsletter/Newsletter'
import Footer from '../landing_page/Footer/Footer'

const Track = () => {
  return (
    <>
      <div className='track__section'>
        <div className='track__container'>
            <Account_logo/>
            <Nav/>
            <div className="faq__home">
            <p>
              Home
              <IoIosArrowForward /> <a href="/">Help</a>
              <IoIosArrowForward /><a href='/' id='order'>Track My Order</a>
            </p>
            <h2>Track My Order</h2>
            <div className='track__form'>
                <div className='track__number'>
             <label>Input Order Number</label>
             <input className='track__input' type="text" />
             </div>
              
             <div className='track__number'>
             <label>Input Order Time</label>
             <input className='track__input'  type="text" />
             </div>
             <div className='track__number'>
             <label>Input Food Items</label>
             <input className='track__input'  type="text" />
             </div>
             
             <div className='track__number'>
             <label>Input Price of Food Items</label>
             <input className='track__input'  type="text" />
             </div>
            </div>
        </div>
        <Whyus/>
        <Newsletter/>
        <Footer/>
      </div>
      </div>
    </>
  )
}

export default Track
