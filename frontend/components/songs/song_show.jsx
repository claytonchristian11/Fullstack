import React from 'react';

class SongShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.song = this.props.song;
    this.handlePlay = this.handlePlay.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {

  }

  handlePlay(e) {
    e.preventDefault();
    this.props.receivePlaySong(this.song);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.receiveDeleteSong(this.song);
    this.props.history.push('/home');
  }

  handleEdit(e) {
    e.preventDefault();
    debugger;
    this.props.history.push(`/songs/edit/${this.song.id}`);
  }

  render() {

    return (
      <div>
        <div className="song-show">
          <div className="song-show-div">
            <div className="song-show-info">
              <img className="song-show-play"
                src="https://www.seoclerk.com/pics/446033-13uMBM1476730969.png"
                onClick={this.handlePlay}
                />
              <div className="song-show-header">
                <h3 className="song-show-artistname">{this.song.artist_name}</h3>
                <h3 className="song-show-songname">{this.song.song_name}</h3>
              </div>
            </div>

            <div>
              <img className="song-show-art" src={this.song.artworkUrl} />
            </div>
          </div>
          <button className="song-show-delete" onClick={this.handleDelete}>Delete Song</button>
          <button className="song-show-delete" onClick={this.handleEdit}>Edit Song</button>
        </div>
      </div>
    );
  }

}

export default SongShowItem;
