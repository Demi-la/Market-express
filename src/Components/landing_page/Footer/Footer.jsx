import React from 'react'
import {AiOutlineGlobal} from 'react-icons/ai';
import {FiPhoneCall} from 'react-icons/fi';
import {BsWhatsapp} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {RxTwitterLogo} from 'react-icons/rx';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FiLinkedin} from 'react-icons/fi';
import {AiOutlineYoutube} from 'react-icons/ai';
import {FaTiktok} from 'react-icons/fa';



import "./Footer.css"

function Footer() {
  return (
   <>
    <div className='footer__container'>
    <div className='footer__wrapper'>
        <div className=' footer contacts'>
           
            <ul>
              <li> <h5>Market Express</h5></li>
              <li> <p> <AiOutlineGlobal /> English</p></li>
              <li> <p> <FiPhoneCall/> 09080520324</p></li>
              <li><p>   <BsWhatsapp/> 08158985264</p></li>
           </ul>
        </div>
        <div className=' footer categories'>
           
            <ul>
                <li> <h5>Categories</h5></li>
                <li>Cereals</li>
                <li>Diary and Non Diary</li>
                <li>Drinks</li>
                <li>Fruits and Vegetables</li>
                <li>Grains and Pasta</li>
                <li>Legumes</li>
                <li>Meat, Poultry and Seafood</li>
                <li>Oils</li>
                <li>Soup Ingredients</li>
                <li>Tubers</li>
                <li>Others</li>
            </ul>
        </div>
        <div className=' footer payment'>
           
            <ul>
                <li> <h5>Payment</h5></li>
                <li>Cash on delivery</li>
                <li>MasterCard</li>
                <li>Verve</li>
                <li>Interswitch</li>
                <li>USSD Payments</li>
            </ul>
        </div>
        <div className=' footer company'>
            
            <ul>
                <li><h5>Company</h5></li>
                <li> Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Refer and Earn</li>
                <li>Join Market Express</li>
            </ul>
        </div>
        <div className=' footer socials'>
           
            <ul>
                <li> <h5>Join us on Social Media</h5></li>
                <li> <p ><BsFacebook/> Facebook</p> </li>
                <li> <p> <RxTwitterLogo/> Twitter</p> </li>
                <li> <p> <AiOutlineInstagram/> Instragram</p> </li>
                <li> <p> <FiLinkedin/> Linkedin</p> </li>
                <li> <p> <AiOutlineYoutube/> Youtube</p> </li>
                <li> <p> <FaTiktok/>Tiktok </p> </li>
            </ul>
        </div>
        <div className=' footer support'>
          <ul>
            <li> <h5>Support</h5></li>
            <li>FAQs</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
    </div>
    <div className='rights'>
        <hr/>
        <p>@ 2023 Market Express All Rights Reserved</p>
      </div>
    </div>
    
   </>
  )
}

export default Footer
