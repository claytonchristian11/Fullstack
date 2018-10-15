import React from 'react';

export default ({ song }) => {
  constructor() {
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
  
  }

  return (
    <li className="stream-song-item">
      <div className="stream-song-item-div">
        <div>
          <img className="song-item-art" src={song.artworkUrl} />
        </div>
        <div>
          <div className="song-item-top">
            <img className="song-item-play"
              src="https://www.seoclerk.com/pics/446033-13uMBM1476730969.png"
              onClick={this.handlePlay}
              />
            <div className="song-item-header">
              <h3 className="song-item-artistname">{song.artist_name}</h3>
              <h3 className="song-item-songname">{song.song_name}</h3>
            </div>
          </div>
          <div>
            <img className="song-item-waveform" src="https://i.imgur.com/WY1U2DE.png" />
          </div>
        </div>
      </div>
    </li>
  );
}
