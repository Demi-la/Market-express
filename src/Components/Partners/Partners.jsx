import React from 'react'

import "./Partners.css"

const Partners = (props) => {
  return (
    <>
        <div className='partner'>
        <h5>Trusted Partners</h5>
        <p>We are partnered an d supported by  these  corporations</p>
    </div>
    
    <div className='partners'>
    {props.details.map( (value,index)=>(
    <div className='partners__container' key={index}>
        <div discount__wrapper>
            <img src={value.img} alt="cereal" className='partners__image'/>

        </div>
    
    </div>
        ))}; 
        </div>
    </>
  )
}

export default Partners
