import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/landing_page/Home/Home';
import Signup from './Components/Create_account/Signup/Signup.jsx'


import Account from './Components/Account/Account.jsx';
import Login from './Components/Create_account/Login/Login.jsx';
import Home_page from './Components/Home_page/Home_page';

import Contacts from './Components/Contacts/Contacts';
import Cart from './Components/Cart/Empty_cart/Empty_cart';
import Error from './Components/ErrorPage/Error/Error.jsx'
import Faq from './Components/FAQ/Faq';
import Track from './Components/Track/Track';





import './App.css';





function App() {
  return (
   <>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='signup'element={<Signup/>} />
     
     <Route path='/account'element={<Account/>} />
     <Route path='/login'element={<Login/>} />     
     <Route path='/home_page'element={<Home_page/>} />
     <Route path='/contacts'element={<Contacts/>} />
     <Route path='/cart'element={<Cart/>} />
     <Route path='/error'element={<Error/>} />
     <Route path='/faq'element={<Faq/>} />
     <Route path='/track'element={<Track/>} />

   </Routes>
   
   </>
  );
}

export default App;
