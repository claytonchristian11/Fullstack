import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <div>
          <div className="profile-show">
            <h3 className="profile-show-songname">{this.props.currUsername}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
