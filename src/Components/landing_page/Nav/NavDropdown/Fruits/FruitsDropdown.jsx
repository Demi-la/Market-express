import React from 'react'
import FruitsItem from './FruitsItem';
import { Link } from 'react-router-dom';

const FruitsDropdown = () => {
  return (
    <>
       <ul className='dropdown_menu' >
        {FruitsItem.map((item) => {
            return(
                <li key={item.id}>
                    <Link className={item.cName} to={item.path} onClick={() => FruitsDropdown(false)}
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

export default FruitsDropdown
