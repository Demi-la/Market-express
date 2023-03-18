import React from 'react'

import Account_logo from '../Account/Account_logo/Account_logo'
import Nav from '../landing_page/Nav/Nav'
import Caro from '../landing_page/Carou/Caro'
import Popularproducts from '../landing_page/Popularproducts/Popularproducts'
import Items from '../landing_page/Items/Items'
import ItemsData from '../landing_page/Items/ItemsData'
import Discount from '../landing_page/Discount/Discount'
import Data from '../landing_page/Discount/Data'
import Perishables from '../landing_page/Perishables/Perishables'
import PerishablesData from '../landing_page/Perishables/PerishablesData'
import Deal from '../landing_page/Deal/Deal'
import DealData from '../landing_page/Deal/DealData'
import School from '../landing_page/School/School'
import schoolData from '../landing_page/School/schoolData'
import Partners from '../landing_page/Partners/Partners'
import PartnersData from '../landing_page/Partners/PartnersData'
import About from '../landing_page/About/About'
import Whyus from '../landing_page/Whyus/Whyus'
import Newsletter from '../landing_page/Newsletter/Newsletter'
import Footer from '../landing_page/Footer/Footer'



const Home_page = () => {
  return (
    <div>
      <Account_logo/>
      <Nav/>
      <Caro/>
      <Popularproducts/>
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

export default Home_page
