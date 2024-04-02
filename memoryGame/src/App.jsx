import React from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/Login'; 
import Profile from './components/Profile';
// import Game from './components/Game';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';


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
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='Game' element={<Game />}></Route> 
          <Route path='Leaderboard' element={<Leaderboard />}></Route>

        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App