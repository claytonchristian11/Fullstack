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
        <h1>stream</h1>
        <h2>songs go here</h2>
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
