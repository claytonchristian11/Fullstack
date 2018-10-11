import React from 'react';
import { Route, Redirect, Switch, Link} from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
  <div>
    <div className='main-background'>

      <Modal />
      <header className='main-header'>
        <div className='main-header-logo'>
          <img className='main-header-logo-pic' src='https://a-v2.sndcdn.com/assets/images/header/cloud-e365a47.png' />
          <h3 className='main-header-name'>CLOUDSOUNDS</h3>
        </div>
        <GreetingContainer className='main-header-signup'/>
      </header>

      <main className='main-body'>
        <div className='main-body-adtext'>
          <p className='main-body-adtext-go'>Discover more with CloudSounds Cloud+</p>
          <p className='main-body-adtext-text'>CloudSounds Cloud+ lets you listen offline, ad-free, with over 150 million songs.</p>
          <div className='main-body-buttons'>
            <button className='main-body-adtext-b1'>Learn More</button>
            <button className='main-body-adtext-b2'>Try it free for 30 days</button>
          </div>
        </div>

      </main>

    </div>
  </div>
);

export default App;
