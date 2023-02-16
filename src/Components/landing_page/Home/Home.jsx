import React from 'react'
import Logo from '../Logo/Logo.jsx'
import Nav from '../Nav/Nav.jsx';
import Caro from '../Carou/Caro.jsx';
import Popularproducts from '../Popularproducts/Popularproducts.jsx'
import Items from '../Items/Items.jsx';
import ItemsData from '../Items/ItemsData.jsx';
import Discount from '../Discount/Discount.jsx';
import Data from '../Discount/Data.jsx';
import Perishables from '../Perishables/Perishables.jsx'
import PerishablesData from '../Perishables/PerishablesData.jsx';
import Deal from '../Deal/Deal.jsx';
import DealData from '../Deal/DealData.jsx';
import School from '../School/School.jsx';
import schoolData from '../School/schoolData.jsx';
import Partners from '../Partners/Partners.jsx';
import PartnersData from '../Partners/PartnersData.jsx';
import About from '../About/About.jsx';
import Whyus from '../Whyus/Whyus.jsx';
import Newsletter from '../Newsletter/Newsletter.jsx';
import Footer from '../Footer/Footer.jsx';
import './Home.css'
function Home() {
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
    <Newsletter/>
    <Footer/>
  </div>
  )
}

export default Home
