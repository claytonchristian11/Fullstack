import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <div className="navbar-main">
        <div className="navbar-logo">
          <img className="navbar-logo-img" src="https://a-v2.sndcdn.com/assets/images/header/cloud-e365a47.png" />
        </div>
        <div className="navbar-home">Home</div>
        <div className="navbar-search-div">
          <input className="navbar-search" type="text" placeholder="Search" />
        </div>
        <div className="navbar-upload">Upload</div>
        <div className="navbar-profile">Profile</div>
        <div onClick={this.logout} className="navbar-logout">Logout</div>
      </div>
    );
  }
}

export default Navbar;
