import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button className='signin-button' onClick={() => openModal('login')}>Sign in</button>
        &nbsp;&nbsp;
       <button className='create-account-button' onClick={() => openModal('signup')}>Create account</button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Greeting;
