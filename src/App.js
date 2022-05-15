import React from 'react'
import './App.css';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Bank from './Bank';
import Bank1 from './Bank1';
import Bank2 from './Bank2';
import Bank3 from './Bank3';
import Bank4 from './Bank4';
import Bank5 from './Bank5';
import Bank6 from './Bank6';
import Bank7 from './Bank7';
import Bank8 from './Bank8';
import Bank9 from './Bank9';
import Bank10 from './Bank10';
import Bank11 from './Bank11';
import User from './User';
import Sure from './Sure';
import Call from './Call';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/bank' element={<Bank />} />
        <Route path='/bank1' element={<Bank1 />} />
        <Route path='/bank2' element={<Bank2 />} />
        <Route path='/bank3' element={<Bank3 />} />
        <Route path='/bank4' element={<Bank4 />} />
        <Route path='/bank5' element={<Bank5 />} />
        <Route path='/bank6' element={<Bank6 />} />
        <Route path='/bank7' element={<Bank7 />} />
        <Route path='/bank8' element={<Bank8 />} />
        <Route path='/bank9' element={<Bank9 />} />
        <Route path='/bank10' element={<Bank10 />} />
        <Route path='/bank11' element={<Bank11 />} />
        <Route path='/User' element={<User />} />
        <Route path='/Sure' element={<Sure />} />
        <Route path='/Call' element={<Call />} />

      </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App