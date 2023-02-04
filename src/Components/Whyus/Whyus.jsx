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
              <br/>
              Shop from the comfort of your space and at your convenience by making just a few clicks.</p>
        </div>
        <img src={phone1} alt="" />
        <img src={phone2} alt=""/>
    </div>
    </>
  )
}

export default Whyus
