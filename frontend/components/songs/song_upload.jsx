import React from 'react';
import Wavesurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
import MinimapPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js';

export default class SongUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artist_name: "",
      song_name: "",
      album_id: "",
      audioFile: null,
      audioUrl: null,
      artworkFile: null,
      artworkUrl: 'https://orig00.deviantart.net/5162/f/2014/153/9/e/no_album_art__no_cover___placeholder_picture_by_cmdrobot-d7kpm65.jpg'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAudioFile = this.handleAudioFile.bind(this);
    this.handleArtworkFile = this.handleArtworkFile.bind(this);
  }

  componentDidMount() {

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
    formData.append('song[artist_name]', this.state.artist_name);

    if (this.state.audioFile) {
      formData.append('song[audio]', this.state.audioFile);

    }

    if (this.state.artworkFile) {
      formData.append('song[artwork]', this.state.artworkFile);
    }
    this.props.receiveSong(formData);
  }

  render() {
    const artworkPreview = <img className="upload-form-art" src={this.state.artworkUrl} />;


    return (
      <div className="upload-form-div">
        <div className="upload-form">
          <form onSubmit={this.handleSubmit} >
            <div className="upload-form-main">
              <h1>Upload a song to the cloud!</h1>
              <div className="audio-file-div">
                <label htmlFor="audio-upload" className="upload-label-aud">Audio  </label>
                  <input type="file"
                    onChange={this.handleAudioFile}
                    id="audio-upload"
                    />
              </div>

              <div className="upload-form-bottom">
                <div className="upload-form-art-div">{artworkPreview}</div>
                <div className="upload-form-info">
                  <input type="text"
                    className="upload-form-name"
                    placeholder="Song name"
                    value={this.state.song_name}
                    onChange={this.update('song_name')}
                    />

                  <input type="text"
                    className="upload-form-artname"
                    placeholder="Artist Name"
                    value={this.state.artist_name}
                    onChange={this.update('artist_name')}
                    /><br />

                  <label className="upload-label">Album artwork file</label><br />
                    <input type="file"
                      className="upload-artfile"
                      onChange={this.handleArtworkFile}
                      /><br />

                    <button className="upload-upload-button" type='submit'>Upload Song!</button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>

    );
  }
}
