import React from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';

class SongPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.currentSong = this.props.currentSong.currentSong;
  }

  render() {
    return (
      <div className="song-player">
        <ReactAudioPlayer
          className="song-player-el"
          src={this.currentSong.audioUrl}
          controls
          />
      </div>
    );
  }
}

export default SongPlayer;
