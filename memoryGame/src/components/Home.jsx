// import React from 'react';
// import '../style/home.css';



// function Home() {

//   const navigateToLogin = () => {
//     window.location.href = "/login"; 
//   };
//   const navigateToHome = () => {
//     window.location.href = "/homePage"; 
//   };
//   const navigateToProfile = () => {
//     window.location.href = "/profilePage"; 
//   };
// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to="/homePage">Home</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//       </ul>
//     </nav>
//   </header>
// );

// };
// export default Home;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/home.css';



function Home() {

  const navigate = useNavigate();

  const navigateToLogin = () => navigate("/login");
  const navigateToHome = () => navigate("/homePage");
  const navigateToProfile = () => navigate("/profilePage");

  return (
    <div>
     <header>
    <nav>
      <ul>
        <h1>Memory game</h1>
        <li><Link to="/homePage">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  </header>
    </div>
  );
}

export default Home;