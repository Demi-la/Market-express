import React from 'react'


import mamagold from '../../../../Assets/mamagold.JPG'
import goldenmorn from '../../../../Assets/goldernmorn.JPG'
import kingsoil from '../../../../Assets/Kingsoil.png'

import './Mostpopular.css'

const PopularData = [
    {
        img: mamagold,
        tittle: "Mama Gold 50kg Rice",
        price:"38,500 Naira",
    
    },
    {
        img: goldenmorn,
        tittle: "800g Golden Morn",
        price:"1,800 Naira",
    
    },
    {
        img: kingsoil,
        tittle: "5 litres of Devon’s King Oil",
        price:"9,800 Naira",
    
    },
]



    const Mostpopular = (props) => {

  return (
    <>
      <div className='popular__section'>
        <div className='polular__container'>
            <h2>Most Popular Food Items</h2>
            <div className='popular_box'>
    {

    PopularData.map((item)=>(
        <div className='popular__wrapper'  >
        <div className='popular__img'>
            <img src={item.img}className='rice'/>
           
           

            </div>
        <div className='popular__info'>
                <p className='popular__tittle'>{item.tittle}</p>
                <p className='popular__price'>{item.price}</p>
            </div>

    </div>
    )
    
   
    )};
    </div>

        </div>
      </div>
    </>
  )
}


export default Mostpopular
