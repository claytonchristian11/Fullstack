import React from 'react';
import Autocomplete from './autocomplete_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }

  logout() {
    this.props.logout();
  }

  handleUpload(e) {
    e.preventDefault();
    this.props.history.push('/upload');
  }

  handleHome(e) {
    e.preventDefault();
    this.props.history.push('/home');
  }

  handleProfile(e) {
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currUserId}`);
  }

  render() {
    return (
      <div className="navbar-main">
        <div className="navbar-logo">
          <img
            className="navbar-logo-img"
            onClick={this.handleHome}
            src="https://a-v2.sndcdn.com/assets/images/header/cloud-e365a47.png"
             />
        </div>
        <div className="navbar-home" onClick={this.handleHome}>Home</div>
        <div className="navbar-search-div">
          <Autocomplete history={this.props.history} className="navbar-search" />
        </div>
        <div className="navbar-upload" onClick={this.handleUpload}>Upload</div>
        <div className="navbar-profile" onClick={this.handleProfile}>Profile</div>
        <div onClick={this.logout} className="navbar-logout">Logout</div>
      </div>
    );
  }
}

export default Navbar;
