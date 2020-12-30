import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer from 'react-modular-audio-player';

class SongPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: this.props.currentSong.song_name
    };
  }

  componentDidMount() {
    document.getElementById('play').click();
  }

  componentDidUpdate() {

    if (this.state.song !== this.props.currentSong.song_name) {
      this.setState({
        song: this.props.currentSong.song_name
      });
      document.getElementById('play').click();
    }
  }

  render() {

    let playlist = [{
      src: this.props.currentSong.audioUrl,
      title: this.props.currentSong.song_name,
      artist: this.props.currentSong.artist_name}];

    let rearrangedPlayer = [
      {
        className: "player-buttons",
        style: {margin: "0 10px 0 10px"},
        innerComponents: [
          {
            type: "rewind",
            style: {width: "fit-content", margin: "0 0 0 80px"}
          },
          {
            type: "play",
            style: {width: "fit-content", margin: "0 0 0 30px"}
          },
          {
            type: "forward",
            style: {width: "fit-content", margin: "0 0 0 28px"}
          },
          {
            type: "time",
            style: {width: "fit-content", margin: "2px 0 0 40px"}
          },
          {
            type: "seek",
            style: {width: "450px", margin: "5px 0 0 10px"}
          },
          {
            type: "volume",
            style: {width: "fit-content", margin: "0 0 0 30px"}
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
            pauseIcon="https://cdn3.iconfinder.com/data/icons/ui-web-design/33/pause-512.png"
            pauseHoverIcon="https://cdn3.iconfinder.com/data/icons/ui-web-design/33/pause-512.png"
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
          <div className="song-player-songinfo">
            <img className="song-player-img" src={this.props.currentSong.artworkUrl} />
            <div className="song-player-artistsong">
              <h3 className="song-player-artist">{this.props.currentSong.artist_name}</h3>
              <h3 className="song-player-song">{this.props.currentSong.song_name}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SongPlayer;
