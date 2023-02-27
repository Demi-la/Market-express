import React from 'react'
import { useState } from 'react'

import Signup from './Signup'
import Account from '../../../Account_page/Account/Account.jsx'

const Form = () => {


    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const  submitForm = () => {
      setFormIsSubmitted(true);
    };
  return (
    <div>
        {!formIsSubmitted ? ( <Signup submitForm={submitForm}/> 
    ) : (

   <Account/>
   
    )}
    </div>
    
  )
}

export default Form
