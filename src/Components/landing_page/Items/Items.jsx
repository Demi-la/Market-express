import React, { useState } from 'react'

import "./Items.css"


const Items = (props) => {
 
  // const [drop, setDrop] = useState({
  //   activeObject: null,
  //   objects:[{  id: 1}, {  id: 2}, {  id: 3}, {  id: 4}, {  id: 5}, {  id: 6}]
  // })
  const [drop, setDrop]=useState(false)
  const hover =()=>{
    setDrop(!drop)

  }

  // const toggleActive=(index) => {
  //    setDrop({ ...drop, activeObject: drop.objects[index]});
  // }

  // const toggleActiveStyles = (index) => {
  //   if (drop.objects[index] ===drop.activeObject){
  //     return "addToCart";
  //   }else{
  //     return "none"
  //   }
   
  // }

  return (
    <>
    <div className='cardg'>
    {props.details.map( (value,index)=>(
    <div className='items__container' key={index}  >
        <div className='items__wrapper'>
            <img src={value.img} className='itemImg'/>
        </div>
        <div className='items__info '>
              <p className='items__tittle'>{value.tittle}</p>
              <p className='items__price'>{value.price}</p>
          </div>
          <div className="addToCartButton">Add to cart</div>
    </div>
    ))};
    </div>

    </>
  )
}

export default Items
