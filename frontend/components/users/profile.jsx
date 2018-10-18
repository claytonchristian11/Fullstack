import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureUrl: "http://petmedmd.com/images/user-profile.png",
      pictureFile: null
    };
  }

  componentDidMount() {
    
  }

  handleChange(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({pictureFile: file, pictureUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[user_id]', this.props.currUserId);
    if (this.state.pictureFile) {
      formData.append('user[picture]', this.state.pictureFile);
    }


    this.props.receivePic(formData);
  }



  render() {
    const artworkPreview = <img className="upload-profile-picture" src={this.state.pictureUrl} />;

    return(
      <div>
        <div>
          <div className="profile-show">
            <div className="profile-picture-div">
              {artworkPreview}
              <button
                className="profile-pic-button"
                onClick={this.handleUpload.bind(this)}
                >Change Profile Picture</button>
              <input type="file"
                className="upload-pic-input"
                onChange={this.handleChange.bind(this)}
                />
            </div>
            <h3 className="profile-show-songname">{this.props.currUsername}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
