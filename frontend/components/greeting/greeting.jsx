import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="greeting-page">
    <div className="initial-greeting-form">
      <h1>DRIFT</h1>
      <nav className="login-signup-greeting">

        <div className="login-signup">
          <Link to="/login">Login</Link>
          <Link to="signup">Sign Up</Link>
        </div>

        <Link to="guest-login">Guest Login</Link>
      </nav>
    </div>
  </div>

);

const personalGreeting = (currentUser, logout) => (
  <div className="personal-greeting-page">
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);


export default Greeting;
