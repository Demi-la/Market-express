import React from 'react'
import Logo from '../../landing_page/Logo/Logo'
import Nav from '../../landing_page/Nav/Nav'
import {BsCartPlus} from 'react-icons/bs'
import './Empty_cart.css'
import Recently_viewed from './Recently_viewed/Recently_viewed'
import Mostpopular from './Mostpopular/Mostpopular'
import Whyus from '../../landing_page/Whyus/Whyus'
import Newsletter from '../../landing_page/Newsletter/Newsletter'
import Footer from '../../landing_page/Footer/Footer'



function Empty_cart() {
  return (
   <>
   <div className='cart__section'>
    <div className='cart__container'>
        <Logo/>
        <Nav/>
    </div>
    <div className='cart__box'>
     <div className='box__content'>
     <BsCartPlus id='cart_icon'/>
     <p id='cart_text1'>Your cart is empty.</p>
     <p id='cart_text2'>Browse through our categories and discover the best food items.</p>
     <button id='cart_btn'>Start Shopping</button>
     </div>
    </div>
    <Recently_viewed/>
 
    <Mostpopular/>
    <Whyus/>
    <Newsletter/>
    <Footer/>
 
   </div>
   </>
  )
}

export default Empty_cart
