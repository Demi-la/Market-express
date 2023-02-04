import React from 'react'


import "./Discount.css"

const Discount = (props) => {

  return (
    <>
    <div className='discount'>
        <h5>Discount Deals</h5>
        <p>Stay on budget while shopping for your groceries with our discount deals. </p>
    </div>
    
    <div className='discounts'>
    {props.details.map( (value,index)=>(
    <div className='discount__container' key={index}>
        <div discount__wrapper>
            <img src={value.img} alt="cereal" className='coco'/>
            <div className='discount__info'>


            <p className='items__tittle'>{value.tittle}</p>
                <p className='items__price'>{value.price} <p>{value.price2}</p></p>
            </div>
        </div>
    
    </div>
        ))}; 
        </div>
    </>
  )
}

export default Discount
