import React from 'react'
import './DiaryDropdown.css'
import { Link } from 'react-router-dom'
import DiaryItem from './DiaryItem'

const DiaryDropdown = () => {
  return (
    <>
       <ul className='dropdown_menu' >
        {DiaryItem.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={item.cName} to={item.path} onClick={() => DiaryDropdown(false)}
                       >
                        {item.tittle}
                    </Link>
                </li>
            );
        })}
      </ul>
    </>
  )
}

export default DiaryDropdown
