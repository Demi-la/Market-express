import React from 'react'

import "./School.css"

const School = (props) => {
  return (
    <>
       <div className='school'>
        <h5>Back to School</h5>
        <p>Get our essential foodstuffs and provisions package needed for school. </p>
    </div>
    
    <div className='schools'>
    {props.details.map( (value,index)=>(
    <div className='schools__container' key={index}>
        <div discount__wrapper>
            <img src={value.img} alt="cereal" className='image'/>
            <div className='schools__info'>


            <p className='schools__tittle'>{value.tittle}</p>
                <p className='schools__price'>{value.price} </p>
            </div>
        </div>
    
    </div>
        ))}; 
        </div>
    </>
  )
}

export default School
