import React from 'react'
import phone1 from './img/pnone1.svg'
import phone2 from './img/phone2.svg'
import "./Whyus.css"

const Whyus = () => {
  return (
    <>
    <div className='whyus__container'>
        <div className='whyus__wrapper'>
            <p>Have a stress-free market experience by downloading the Market Express App on your phone. 
              <br/>
              Shop from the comfort of your space and at your convenience by making just a few clicks.</p>
        </div>
        <div className='phone_icons'>
        <img src={phone1} alt=""   style={{ width: "9rem", height: "9rem", fill: "red" }} className='phone_icon1'/>
        <img src={phone2} alt=""  style={{ width: "5rem", height: "8rem", padding: "0.5rem" }} className='phone_icon2'/>
        
    </div>
    </div>
    </>
  )
}

export default Whyus
