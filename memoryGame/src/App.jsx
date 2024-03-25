import React from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/Login'; 
// import Profile from './components/Profile'; 
import Cards from './components/Cards'; 


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/Profile' element={<Profile />}></Route> */}
          <Route path='cards' element={<Cards />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App