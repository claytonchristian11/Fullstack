import React from 'react';

export default class SongUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      song_name: "",
      album_id: "",
      audioFile: null,
      audioUrl: null,
      artworkFile: null,
      artworkUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAudioFile = this.handleAudioFile.bind(this);
    this.handleArtworkFile = this.handleArtworkFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleAudioFile(e) {
    const audfile = e.currentTarget.files[0];
    const audfileReader = new FileReader();
    audfileReader.onloadend = () => {
      this.setState({audioFile: audfile, audioUrl: audfileReader.result});
    };
    if (audfile) {
      audfileReader.readAsDataURL(audfile);
    }
  }

  handleArtworkFile(e) {
    const artfile = e.currentTarget.files[0];
    const artfileReader = new FileReader();
    artfileReader.onloadend = () => {
      this.setState({artworkFile: artfile, artworkUrl: artfileReader.result});
    };
    if (artfile) {
      artfileReader.readAsDataURL(artfile);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[song_name]', this.state.song_name);

    if (this.state.audioFile) {
      formData.append('song[audio]', this.state.audioFile);
    }

    if (this.state.artworkFile) {
      formData.append('song[artwork]', this.state.artworkFile);
    }
    this.props.receiveSong(formData).then(this.props.history.push('/home'));
  }

  render() {
    return (
      <div className="upload-form-div">
        <div className="upload-form">
          <form onSubmit={this.handleSubmit} >
            <div className="upload-form-main">
              <h1>Upload a song to the cloud!</h1>

                <input type="file"
                  onChange={this.handleAudioFile}
                  id="audio-upload"
                  />


              <label className="upload-form-head">Song name
                <input type="text"
                  value={this.state.song_name}
                  onChange={this.update('song_name')}

                  />
              </label><br />



              <label>Album artwork file:
                <input type="file"
                  onChange={this.handleArtworkFile}
                  />
              </label><br />

              <button type='submit'>Upload Song!</button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}
