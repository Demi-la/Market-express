import React from 'react'
import LegumesItem from './LegumesItem';
import { Link } from 'react-router-dom';

const LegumesDropdown = () => {

  return (
    <>
       <ul className='dropdown_menu' >
        {LegumesItem.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={item.cName} to={item.path} onClick={() => LegumesDropdown(false)}
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

export default LegumesDropdown
