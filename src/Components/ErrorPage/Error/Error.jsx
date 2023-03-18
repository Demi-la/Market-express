import React from 'react'

import Account_logo from '../../Account/Account_logo/Account_logo'
import Nav from '../../landing_page/Nav/Nav'
import {MdError} from 'react-icons/md'
import './Error.css'
import Whyus from '../../landing_page/Whyus/Whyus'
import Newsletter from '../../landing_page/Newsletter/Newsletter'
import Footer from '../../landing_page/Footer/Footer'

const Error = () => {
  return (
    <>
      <div className='error__section'>
        <div className='error__container'>
            <Account_logo/>
            <Nav/>
            <div className='error__content'>
             <MdError id='error__icon'/>
             <p>Oops!!! Something went wrong</p>
             <h1>404 Error Page</h1>
             <button>Go back to Home Page</button>
            </div>
            <Whyus/>
            <Newsletter/>
            <Footer/>
        </div>
      </div>
    </>
  )
}

export default Error
