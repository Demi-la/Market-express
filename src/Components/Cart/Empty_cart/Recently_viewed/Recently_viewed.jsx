import React from 'react'
import mamachoice from '../../../../Assets/mamachoice.JPG'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import './Recently_viewd.css'

const Recently_viewed = () => {
  return (
    <>
      <div className='recently_section'>
        <div className='recently_container'>
            <div className='recently_content'>
                <h2>Recently viewed</h2>
                <div className='recently__box'>
                  <img src={mamachoice} alt='mama chice rice'/>
                  <div className='recently__info'>
                   <p className='recently__tittle'>Mama Choice Rice 50kg</p>
                   <p className='recently__price'>38,000 Naira <p className='recently__price2'>40,000 Naira</p></p>
                   <div className='recently_icons'>
                   <p ><AiFillStar  className='star__icons'/><AiFillStar className='star__icons'/><AiFillStar className='star__icons'/><AiFillStar className='star__icon'/><AiFillStar className='star__icon'/> </p>
                   <p id='heart_icon'><AiOutlineHeart/></p>
                  </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Recently_viewed
