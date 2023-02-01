import React from 'react'

import "./Items.css"

const Items = (props) => {
 
  return (
    <>
    {props.details.map( (value,index)=>(
    <div className='items__container' key={index}>
        <div className='items__wrapper'>
            <img src={value.img}className='rice'/>
           
           

        </div>
        <div className='items__info'>
                <p className='items__tittle'>{value.tittle}</p>
                <p className='items__price'>{value.price}</p>
            </div>
    </div>
    ))};
    </>
  )
}

export default Items
