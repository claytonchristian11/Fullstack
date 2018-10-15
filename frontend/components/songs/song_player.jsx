import React from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';

class SongPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="song-player">
        <ReactAudioPlayer
          className="song-player-el"
          src="/app/assets/songs/dreams.mp3"
          controls
          />
      </div>
    );
  }
}

export default SongPlayer;
