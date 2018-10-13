import React from 'react';

export default class SongUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      song_name: "",
      album_id: "",
      audioFile: null,
      audioUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({audioFile: file, audioUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[song_name]', this.state.song_name);
    if (this.state.audioFile) {
      formData.append('song[audio]', this.state.audioFile);
    }
    $.ajax({
      url: '/api/songs',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
        console.log(response.responseJSON);
      }
    );
  }

  render() {
    return (
      <div className="upload-form">
        <form onSubmit={this.handleSubmit} >
          <label >Song name:
            <input type="text"
              value={this.state.song_name}
              onChange={this.update('song_name')}
              />
          </label>

          <label>Audio file:
            <input type="file"
              onChange={this.handleFile}
              />
          </label>
          <button type='submit'>Upload Song!</button>
        </form>
      </div>

    );
  }
}
