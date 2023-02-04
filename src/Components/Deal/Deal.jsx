import React from 'react'

import "./Deal.css"

const Deal = (props) => {
  return (
    <>
     <div className='deal'>
        <h5>Owambe Deal</h5>
        <p>Have an Owambe coming up? Shop all the essentials at cheaper prices now </p>
    </div>
    
    <div className='deals'>
    {props.details.map( (value,index)=>(
    <div className='deals__container' key={index}>
        <div discount__wrapper>
            <img src={value.img} alt="cereal" className='image'/>
            <div className='deals__info'>


            <p className='deals__tittle'>{value.tittle}</p>
                <p className='deals__price'>{value.price} </p>
            </div>
        </div>
    
    </div>
        ))}; 
        </div>
    </>
  )
}

export default Deal
