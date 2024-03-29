import React, { useState } from 'react'
import Data from './Data';


import "./Discount.css"

const Discount = (props) => {
    const [itemm, setItemm] = useState([Data]);

    // const handleMouseEnter(index)

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
                <p className='items__price'>{value.price} <p className='items__price2'>{value.price2}</p></p>
            </div>
        </div>
    
    </div>
        ))}; 
        </div>
    </>
  )
}

export default Discount
