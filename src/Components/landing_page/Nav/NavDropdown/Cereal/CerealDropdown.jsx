import React from 'react'
import CerealItem from './CerealItem'
import { Link } from 'react-router-dom'
import './CerealDropdown.css'


const CerealDropdown = () => {


    // const handleClick = () => setClick (!click)
  return (
    <>
      <ul className='dropdown_menu' >
        {CerealItem.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={item.cName} to={item.path} onClick={() => CerealDropdown(false)}
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

export default CerealDropdown
