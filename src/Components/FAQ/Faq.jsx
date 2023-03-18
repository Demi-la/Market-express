import React from 'react'
import Account_logo from '../Account/Account_logo/Account_logo'
import Nav from '../landing_page/Nav/Nav'
import {IoIosArrowForward} from 'react-icons/io'
import './Faq.css'

const Faq = () => {
  return (
    <>
      <div className='faq__section'>
        <div className='faq__container'>
         <Account_logo/>
         <Nav/>
         <div className="faq__home">
            <p>
              Home
              <IoIosArrowForward /> <a href="/">Help</a>
              <IoIosArrowForward />FAQ
            </p>
          <div className='faq__content'>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className='faq__texts'>
            <p>  <p id='questions'>Q:</p> What is Market Express?<br/>
<p id='answer'>A:</p> Market Express is an online food market you can order for your food items ang get them delivered to your location without stress. <br/><br/>

<p id='questions'>Q:</p> How do I place an order on the website?<br/>
<p id='answer'>A:</p> To place an order, simply add items to your cart and proceed to checkout. You will be prompted to enter your shipping and payment information, and once your order is placed, you will receive a confirmation email.
<br/><br/>
<p id='questions'>Q:</p> What types of payment do you accept? <br/>
<p id='answer'>A:</p> We accept Mastercard, Verve, Interswitch, USSD payment and Cash payment on delivery.
<br/><br/>
<p id='questions'>Q:</p> Can I change or cancel my order? <br/>
<p id='answer'>A:</p> Yes, you can change or cancel your order as long as it has not yet been processed and sent. Please contact our customer service team to make any changes or cancellations.
<br/><br/>
<p id='questions'>Q:</p> How long will it take for my order to arrive? <br/>
<p id='answer'>A:</p> Delivery times vary depending on your location and the availability of the items you have ordered. You will receive an estimated delivery date at checkout, and you will also receive tracking information once your order ships.
<br/><br/>
<p id='questions'>Q:</p> Do you offer any discounts or promotions? <br/>
<p id='answer'>A:</p> Yes, we regularly offer discounts and promotions on our website. Please check our website or sign up for our email newsletter to stay informed of any current deals.
<br/><br/>
<p id='questions'>Q:</p> Can I make special requests or modifications to my order? <br/>
<p id='answer'>A:</p> Yes, we will do our best to accommodate any special requests or modifications you may have. Please contact our customer service team to discuss your needs.
<br/><br/>
<p id='questions'>Q:</p> Are there any fees for delivery or returns? <br/>
<p id='answer'>A:</p> There are fees for delivery, depending on your location and the size of your order. Returns may also be subject to a restocking fee. Please refer to our shipping and returns policy for more information.
<br/><br/>
<p id='questions'>Q:</p> How do I track my order? <br/>
<p id='answer'>A:</p> Once your order is shipped, you will receive a tracking number via email. You can use this number to track the status of your order on our website or through the carrier's website.
<br/><br/>
<p id='questions'>Q:</p> Do you have a mobile app?<br/>
<p id='answer'>A:</p> Yes, there is the Market Express mobile app available on Google Play Store and App Store</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq


