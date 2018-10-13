import React from 'react';
import SongItem from './song_item';

class Stream extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllSongs();
  }

  render() {
    const { songs } = this.props;
    return(
      <div className="stream-main">
        <h1>Stream</h1>
        <div>
          <h2>Welcome to your stream</h2>
          <p>Listen to your favorite artists, songs, and clouds here on CloudSounds</p>
        </div>

        <ul> {
            songs.map(song => (
              <SongItem
                key={`song${song.id}`}
                song={song} />
            ))}
        </ul>
      </div>
    );
  }
}

export default Stream;
