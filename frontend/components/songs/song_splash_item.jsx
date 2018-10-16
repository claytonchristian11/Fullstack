import React from 'react';

class SongItem extends React.Component {
  constructor(props) {
    super(props);
    this.song = this.props.song;
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(e) {
    e.preventDefault();
    this.props.receivePlaySong(this.song);
  }

  render() {
    return (
      <div>
        <li className="song-splash-item-li">
          <img className="song-splash-item-art" src={this.song.artworkUrl} />
          <div>
            <h3 className="song-splash-item-songname">{this.song.song_name}</h3>
            <h3 className="song-splash-item-artistname">{this.song.artist_name}</h3>
          </div>
        </li>
      </div>
    );
  }
}

export default SongItem;
