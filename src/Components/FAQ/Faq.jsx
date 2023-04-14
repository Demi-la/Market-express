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
            <div className='faq1'>
            <div><h2 id='questions'>Q:</h2> <p> What is Market Express?</p><br/></div>
               <div><h2 id='answer'>A:</h2> <p>Market Express is an online food market you can order for your food items ang get them delivered to your location without stress.</p></div>
 <br/><br/>
</div>

<div>
<div><h2 id='questions'>Q:</h2><p> How do I place an order on the website?</p><br/></div>
<div><h2 id='answer'>A:</h2> <p>To place an order, simply add items to your cart and proceed to checkout. You will be prompted to enter your shipping and payment information, and once your order is placed, you will receive a confirmation email.</p></div>
</div>
<br/><br/>

<div>
<div><h2 id='questions'>Q:</h2><p> What types of payment do you accept? </p><br/></div>
<div><h2 id='answer'>A:</h2> <p>We accept Mastercard, Verve, Interswitch, USSD payment and Cash payment on delivery.</p> </div>
</div>

<br/><br/>

<div>
<div><h2 id='questions'>Q:</h2> <p>Can I change or cancel my order? </p><br/></div>
<div><h2 id='answer'>A:</h2> <p>Yes, you can change or cancel your order as long as it has not yet been processed and sent. Please contact our customer service team to make any changes or cancellations.</p></div>
</div>


<br/><br/>

<div>
<div><h2 id='questions'>Q:</h2> <p>How long will it take for my order to arrive? </p><br/></div>
<div><h2 id='answer'>A:</h2> <p>Delivery times vary depending on your location and the availability of the items you have ordered. You will receive an estimated delivery date at checkout, and you will also receive tracking information once your order ships.</p> </div>
</div>

<br/><br/>

<div>
<div><h2 id='questions'>Q:</h2> <p>Do you offer any discounts or promotions?</p> <br/></div>
<div><h2 id='answer'>A:</h2> <p>Yes, we regularly offer discounts and promotions on our website. Please check our website or sign up for our email newsletter to stay informed of any current deals.</p></div>
</div>

<br/><br/>

<div>
<div><h2 id='questions'>Q:</h2> <p>Can I make special requests or modifications to my order? </p><br/></div>
<div><h2 id='answer'>A:</h2><p> Yes, we will do our best to accommodate any special requests or modifications you may have. Please contact our customer service team to discuss your needs.</p></div>
</div>

<br/><br/>

<div>
<div><h2 id='questions'>Q:</h2> <p>Are there any fees for delivery or returns? </p><br/></div>
<div><h2 id='answer'>A:</h2> <p>There are fees for delivery, depending on your location and the size of your order. Returns may also be subject to a restocking fee. Please refer to our shipping and returns policy for more information.</p></div>
</div>

<br/><br/>

<div>

<div><h2 id='questions'>Q:</h2> <p>How do I track my order?</p> <br/></div>
<div><h2 id='answer'>A:</h2> <p> Once your order is shipped, you will receive a tracking number via email. You can use this number to track the status of your order on our website or through the carrier's website.</p></div>
</div>

<br/>
<div>
  <div><h2 id='questions'>Q:</h2> <p>Do you have a mobile app?</p><br/></div></div>
 <div><h2 id='answer'>A:</h2> <p>Yes, there is the Market Express mobile app available on Google Play Store and App Store.</p></div>

</div>
          </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default Faq


