import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../style/home.css';

const HomePage = () => (
  <div>
    <h1>Welcome to the Memory Game!</h1>
    {/* Game components go here */}
  </div>
);

const RegistrationPage = () => (
  <div>
    <h1>Registration</h1>
    {/* Registration form goes here */}
  </div>
);

const ProfilePage = () => (
  <div>
    <h1>Profile</h1>
    {/* Profile details go here */}
  </div>
);

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  </header>
);

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/register" component={RegistrationPage} />
      <Route path="/profile" component={ProfilePage} />
    </div>
  </Router>
);

export default App;
