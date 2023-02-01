import React from 'react';
import Logo from '../src/Components/Logo/Logo.jsx'
import Nav from './Components/Nav/Nav.jsx';
import Caro from './Components/Carou/Caro.jsx';
import Popularproducts from './Components/Popularproducts/Popularproducts.jsx'
import Items from './Components/Items/Items.jsx';
import ItemsData from './Components/Items/ItemsData.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo/>
      <Nav/>
      <Caro/>
      <Popularproducts/>
      {/* <Items/> */}
      <Items details={ItemsData}/>
    </div>
  );
}

export default App;
