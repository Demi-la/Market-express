import React from 'react'

import "./Perishables.css"

const Perishables = (props) => {
  return (
      <>
          <div className='perishable'>
        <h5>Perishables</h5>
        <p>Stock up on all your favorite produce, meats, and dairy products before they expire</p>
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
