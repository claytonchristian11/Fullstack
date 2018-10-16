import React from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-modular-audio-player';

class SongPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.currentSong = this.props.currentSong.currentSong;
  }

  render() {
    let playlist = [{
      src:this.currentSong.audioUrl,
      title: this.currentSong.song_name,
      artist: this.currentSong.artist_name}];

    let rearrangedPlayer = [
      {
        className: "player-buttons",
        innerComponents: [
          {
            type: "rewind"
          },
          {
            type: "play"
          },
          {
            type: "forward"
          },
          {
            type: "loop"
          },
          {
            type: "time"
          },
          {
            type: "seek"
          }
        ]
      }
    ];

    return (
      <div className="song-player">
        <div className="song-player-div">
          <AudioPlayer className="song-player-comp"
            audioFiles={playlist}
            rearrange={rearrangedPlayer}
            playerWidth="100%"
            sliderClass="song-player-slider"
            playIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Play-512.png"
            playHoverIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Play-512.png"
            pauseIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Pause-128.png"
            pauseHoverIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Pause-128.png"
            forwardIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Next_Track-128.png"
            forwardHoverIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Next_Track-128.png"
            rewindIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Previous_Track-128.png"
            rewindHoverIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Previous_Track-128.png"
            loopIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Repeat-512.png"
            loopEngagedIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Repeat-512.png"
            volumeIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Volume-128.png"
            volumeEngagedIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Volume-128.png"
            muteIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Mute-128.png"
            muteEngagedIcon="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Mute-128.png"
            iconSize="20px"
            fontFamily="sans-serif"
            fontWeight="400"
            fontSize="14px"
            />
        </div>
      </div>
    );
  }
}

export default SongPlayer;

// <ReactAudioPlayer
//   className="song-player-el"
//   src={this.currentSong.audioUrl}
//   controls
//   />
