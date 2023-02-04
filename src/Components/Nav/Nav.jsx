import React from 'react'
import {BsArrowLeftCircle} from 'react-icons/bs'
import {BsGrid} from 'react-icons/bs'
import './Nav.css'

const Nav = () => {
  return (
   <nav className='navbar' style={{padding: '0 20px'}}>
     <div className='nav_ul' >
            <div  className='icon'><BsArrowLeftCircle/></div>
            <a href='/'>All Categories <BsGrid/></a> 
            <a href='/'>Cereals</a>
            <a href='/'>Dairy and Non Diary</a>
            <a href='/'>Drinks</a>
            <a href='/'>Fruits and Vegetables</a>
            <a href='/'>Grains and Pasta</a>
            <a href='/'>Herbs and Spices</a>
            <a href='/'>Legumes</a>
        </div>
    {/* <div className='nav__list'>
        <ul className='nav_ul'>
            <li  className='icon'><BsArrowLeftCircle/></li>
            <li><a href='/'>All Categories</a><BsGrid/> </li>
            <li><a href='/'>Cereals</a></li>
            <li><a href='/'>Dairy and Non Diary</a></li>
            <li><a href='/'>Drinks</a></li>
            <li><a href='/'>Fruits and Vegetables</a></li>
            <li><a href='/'>Grains and Pasta</a></li>
            <li><a href='/'>Herbs and Spices</a></li>
            <li><a href='/'>Legumes</a></li>
        </ul>
    </div> */}
   </nav>
  )
}

export default Nav
