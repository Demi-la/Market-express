import React from 'react'
import { Link } from 'react-router-dom'
import DrinksItem from './DrinksItem'

const DrinksDropdown = () => {
  return (
    <>
       <ul className='dropdown_menu' >
        {DrinksItem.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={item.cName} to={item.path} onClick={() => DrinksDropdown(false)}
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

export default DrinksDropdown
