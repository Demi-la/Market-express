import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { Link } from "react-router-dom";
import DiaryDropdown from "./NavDropdown/Diary/DiaryDropdown";
import DrinksDropdown from "./NavDropdown/Drinks/DrinksDropdown";
import CerealDropdown from "./NavDropdown/Cereal/CerealDropdown";
import FruitsDropdown from "./NavDropdown/Fruits/FruitsDropdown";
import GrainsDropdown from "./NavDropdown/Grains/GrainsDropdown";
import HerbsDropdown from "./NavDropdown/Herbs/HerbsDropdown";
import LegumesDropdown from "./NavDropdown/Legumes/LegumesDropdown";
import "./Nav.css";

const Nav = () => {
  const [cereal, setCereal] = useState(true);
  const cerealMenu = () => {
    setCereal(!cereal);
  };

  const [diary, setDiary] = useState(true);
  const diaryMenu = () => {
    setDiary(!diary);
  };

  const [drinks, setDrinks] = useState(true);
  const drinksMenu = () => {
    setDrinks(!drinks);
  };

  const [fruits, setFruits] = useState(true);
  const fruitsMenu = () => {
    setFruits(!fruits);
  };

  const [grains, setGrains] = useState(true);
  const grainsMenu = () => {
    setGrains(!grains);
  };

  const [herbs, setHerbs] = useState(true);
  const herbsMenu = (event) => {
    setHerbs(!herbs);
    event.preventDefault()
  };

  const [legumes, setLegumes] = useState(true);
  const legumesMenu = () => {
   
    setLegumes(!legumes)
   
  };

  // const handleChange = (event) =>{
  //   event.preventDefault()
  // }

  return (
    <nav className="navbar">
      <ul className={"nav-menu"}>
        <div className="icon">
          <BsArrowLeftCircle />
        </div>

        <li className="nav-item">
          <Link to="/all categories" className="nav-link">
            All Categories <BsGrid />
          </Link>
        </li>

        <li className="nav-item" onClick={() => cerealMenu()}>
          <div>
            <p className="nav-link"> Cereals </p>
          </div> {!cereal ? (
             <div>
              <CerealDropdown />
              </div> 
              ) : ( 
                 false
                 )}
        </li>

        <li className="nav-item" onClick={() => diaryMenu()}>
          <div>
            <p className="nav-link">Dairy and Non Diary</p>
          </div>
          {!diary ? ( 
          <div>
            <DiaryDropdown /> 
              </div> 
            ) : (
              false
              )}
        </li>

        <li className="nav-item" onClick={() => drinksMenu()}>
          <div>
            <p className="nav-link">Drinks</p>
          </div>
          {!drinks ? (
         <div>
            <DrinksDropdown/>
            </div>
          ) : (
            false
          )}
        </li>

        <li className="nav-item" onClick={() => fruitsMenu ()}>
          <div>
          <p className="nav-link">Fruits and Vegetables </p>
          </div>
          {!fruits ? (
             <div>
               <FruitsDropdown/>
                </div> 
                ) : (
                   false
                    )}
        </li>

     
        <li className="nav-item" onClick={() => grainsMenu ()}>
          <div>
          <p className="nav-link">Grains and pasta </p>
          </div>
          {!grains ? (
             <div>
               <GrainsDropdown/>
                </div> 
                ) : (
                   false
                    )}
        </li>

        <li className="nav-item" onClick={() => herbsMenu ()}>
          <div>
          <p className="nav-link">Herbs and spices </p>
          </div>
          {!herbs ? (
             <div>
               <HerbsDropdown/>
                </div> 
                ) : (
                   false
                    )}
        </li>

       
        <li className="nav-item" onClick={() => legumesMenu ()}>
          <div>
          <p className="nav-link">Legumes </p>
          </div>
          {!legumes ? (
             <div>
               <LegumesDropdown/>
                </div> 
                ) : (
                   false
                    )}
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
