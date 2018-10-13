import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleHome = this.handleHome.bind(this);
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

  render() {
    return (
      <div className="navbar-main">
        <div className="navbar-logo">
          <img className="navbar-logo-img" src="https://a-v2.sndcdn.com/assets/images/header/cloud-e365a47.png" />
        </div>
        <div className="navbar-home" onClick={this.handleHome}>Home</div>
        <div className="navbar-search-div">
          <input className="navbar-search" type="text" placeholder="Search" />
        </div>
        <div className="navbar-upload" onClick={this.handleUpload}>Upload</div>
        <div className="navbar-profile">Profile</div>
        <div onClick={this.logout} className="navbar-logout">Logout</div>
      </div>
    );
  }
}

export default Navbar;
