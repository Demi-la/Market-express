import React from 'react'
import Logoimage from '../../../Assets/Logoimage.png'

import './Signup.css'

const Signup = () => {
  return (
   <>
   <div className='signup__wrapper'>
   <div className='signup__logo'>
   <img src={Logoimage} alt='/'/>
   </div>
    <div className='signup__container'>

        <h2>Create an account</h2>
    
      <div className='signup__inputs'>
      <div className="name">
            <label className="label">Full Name</label>
            <input
              className="input"
              type="text"
              name="fullname"
              placeholder='Enter your fullname'
              
            />
      </div>

      <div className="name">
            <label className="label">Last Name</label>
            <input
              className="input"
              type="text"
              name="fullname"
              placeholder='Enter your lastname'
              
            />
      </div>

      <div className="email">
            <label className="label">Email Address</label>
            <input
              className="input"
              type="text"
              name="emall"
              placeholder='Enter emaill address'
              
            />
      </div>

      <div className="name">
            <label className="label">Phone Number</label>
            <input
              className="input"
              type="text"
              name="phone number"
              placeholder='Enter your phone number'
              
            />
      </div>

      <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder='Enter your password'
              
            />
           <p>(Use alphabets, numbers and characters)</p>
          </div>
      
      </div>
      <div className='signup__btn1'>
      <button className='signup__btn'>Get Started</button>
      <button className='signup__btn'>Sign up with google</button>
      </div>
    </div>
   </div>
   </>
  )
}

export default Signup
