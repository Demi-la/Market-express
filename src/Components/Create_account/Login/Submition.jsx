import React from 'react'
import { useState } from 'react'
import Login from './Login'
import Account from '../../Account/Account'

const Submition = () => {
    const [Submitted, setSubmitted] = useState(false);

    const  submit = () => {
        setSubmitted(true);
    };
  return (
    <div>
        {!Submitted ? ( 
        <Login submitForm={submit}/> 
    ) : (

   <Account/>
   
    )}
    </div>
    
  )
}

export default Submition
