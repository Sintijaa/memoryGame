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

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/homePage">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  </header>
);

function Home() {

  const navigate = useNavigate();

  const navigateToLogin = () => navigate("/login");
  const navigateToHome = () => navigate("/homePage");
  const navigateToProfile = () => navigate("/profilePage");

  return (
    <div>
      <Header />
      <h1>Laipni lūgti spēlē</h1>
      {/* Piemēra pogas navigācijai */}
      <button onClick={navigateToLogin}>Ielogoties</button>
      <button onClick={navigateToHome}>Sākumlapa</button>
      <button onClick={navigateToProfile}>Profils</button>
    </div>
  );
}

export default Home;