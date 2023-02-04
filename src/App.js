import React from 'react';
import Logo from '../src/Components/Logo/Logo.jsx'
import Nav from './Components/Nav/Nav.jsx';
import Caro from './Components/Carou/Caro.jsx';
import Popularproducts from './Components/Popularproducts/Popularproducts.jsx'
import Items from './Components/Items/Items.jsx';
import ItemsData from './Components/Items/ItemsData.jsx';
import Discount from './Components/Discount/Discount.jsx';
import Data from './Components/Discount/Data.jsx';
import Perishables from './Components/Perishables/Perishables.jsx'
import PerishablesData from './Components/Perishables/PerishablesData.jsx';
import Deal from './Components/Deal/Deal.jsx';
import DealData from './Components/Deal/DealData.jsx';
import School from './Components/School/School.jsx';
import schoolData from './Components/School/schoolData.jsx';
import Partners from './Components/Partners/Partners.jsx';
import PartnersData from './Components/Partners/PartnersData.jsx';
import About from './Components/About/About.jsx';
import Whyus from './Components/Whyus/Whyus.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Logo/>
      <Nav/>
      <Caro/>
      <Popularproducts/>
      {/* <Items/> */}
      <Items details={ItemsData} />
      <Discount details={Data}/>
      <Perishables details={PerishablesData}/>
      <Deal details={DealData}/>
      <School details={schoolData}/>
      <Partners details={PartnersData}/>
      <About/>
      <Whyus/>
      
    </div>
  );
}

export default App;
