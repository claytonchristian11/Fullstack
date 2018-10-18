import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <div className="profile-show">
          <h3 className="profile-show-songname"></h3>
        </div>
        <h1>Profile show</h1>
      </div>
    );
  }
}

export default Profile;
