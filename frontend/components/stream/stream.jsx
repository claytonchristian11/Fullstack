import React from 'react';
import SongItem from '../songs/song_item_container';

class Stream extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllSongs();
  }

  componentDidUpdate(prevProps) {

  }

  render() {
    const { songs } = this.props;
    return(
      <div className="stream-outer">
        <div className="stream-main">
          <div className="stream-stream-div">
            <h1 className="stream-stream">Stream</h1>
          </div>

          <div className="stream-description">
            <h2>Welcome to your stream</h2>
            <p>Listen to your favorite artists, songs, and clouds here on CloudSounds</p>
          </div>

          <ul className="stream-song-ul"> {
              songs.map(song => (
                <SongItem
                  key={`song${song.id}`}
                  song={song}
                  history={this.props.history} />
              ))}
          </ul>
        </div>
        <div className="stream-footer">
          <div className="stream-footer-div">
            <h3 className="stream-footer-text">
              Thanks for checking out the site! Check out the creator here
            </h3>
            <div className="linkedindiv">
              <a className="linkedin" href="https://www.linkedin.com/in/clayton-christian/">linkedIn</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stream;
