import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/Login'; 
// import Profile from './components/Profile'; 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          {/* <Route path='/Profile' element={<Profile />}></Route> */}
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App