import React from 'react'

import "./Perishables.css"

const Perishables = (props) => {
  return (
      <>
          <div className='perishable'>
        <h5>Discount Deals</h5>
        <p>Stay on budget while shopping for your groceries with our discount deals. </p>
    </div>
    
    <div className='perishables'>
    {props.details.map( (value,index)=>(
    <div className='perishables__container' key={index}>
        <div discount__wrapper>
            <img src={value.img} alt="cereal" className='image'/>
            <div className='perishables__info'>


            <p className='perishables__tittle'>{value.tittle}</p>
                <p className='perishables__price'>{value.price}</p>
            </div>
        </div>
    
    </div>
        ))}; 
        </div>
      </>
  )
}

export default Perishables
