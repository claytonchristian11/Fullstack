import React from 'react';
import { Redirect } from 'react-router-dom';

import Modal from '../modal/modal';
import GreetingContainer from '../greeting/greeting_container';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';
import SongSplashItem from '../songs/song_splash_item_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllSongs();
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.openModal('login');
  }

  render() {
    const { songs } = this.props;

    return (
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
            <p className='main-body-adtext-text'>Don't want to make an account? Explore the site with a demo user below</p>
            <div className='main-body-buttons'>
              <button className='main-body-adtext-b1'>Learn More</button>
              <button onClick={this.handleDemoLogin} className='main-body-adtext-b2'>Demo User</button>
            </div>
          </div>
          <div className='main-bottom'>
            <br />
            <h2 className='main-bottom-header'>Hear what's trending today in the CloudSounds community</h2>
            <div>
              <ul className="splash-song-ul"> {
                songs.map(song => (
                  <SongSplashItem
                    key={`ssong${song.id}`}
                    song={song}
                    history={this.props.history} />
                ))}
              </ul>
            </div>
          </div>
          <div className="splash-footer">
            <div className="splash-footer-div">
              <h3 className="splash-footer-text">Thanks for checking out the site! Check out the creator here</h3>
              <div className="linkedindiv">
                <a className="linkedin" href="https://www.linkedin.com/in/clayton-christian/">linkedIn</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Splash;
