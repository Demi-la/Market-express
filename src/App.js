import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/landing_page/Home/Home';
import Signup from './Components/Create_account/Signup/Signup.jsx'

import Account from './Components/Account/Account.jsx';




import './App.css';


function App() {
  return (
   <>
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='signup'element={<Signup/>}></Route>
     <Route path='/account'element={<Account/>}></Route>

   </Routes>
   
   </>
  );
}

export default App;
