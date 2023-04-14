import React from 'react'
import HerbsItem from './HerbsItem';
import { Link } from 'react-router-dom';

const HerbsDropdown = () => {
  return (
    <>
       <ul className='dropdown_menu' >
        {HerbsItem.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={item.cName} to={item.path} onClick={() => HerbsDropdown(false)}
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

export default HerbsDropdown
