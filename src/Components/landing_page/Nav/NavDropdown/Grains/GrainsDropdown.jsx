import React from 'react'
import GrainsItem from './GrainsItems'
import { Link } from 'react-router-dom'

const GrainsDropdown = () => {
  return (
    <>
       <ul className='dropdown_menu' >
        {GrainsItem.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={item.cName} to={item.path} onClick={() => GrainsDropdown(false)}
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

export default GrainsDropdown
