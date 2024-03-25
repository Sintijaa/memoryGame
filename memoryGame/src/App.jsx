import React from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/Login'; 
// import Profile from './components/Profile';
// import Game from './components/Game';
import Title from './components/Title';
import Cards from './components/Cards';
import Stats from './components/Stats';


let overlayStyle = {
  visibility: 'hidden',
  opacity: '0%'
}

let modalStyle = {
  transform: 'translate(0%, 0%)'
}



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Title' element={<Title />}></Route>
          <Route path='/Stats' element={<Stats />}></Route>
          <Route path='/Cards' element={<Cards />}></Route>
          {/* <Route path='/Profile' element={<Profile />}></Route> */}
          {/* <Route path='Game' element={<Game />}></Route> */}
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App