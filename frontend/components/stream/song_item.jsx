import React from 'react';

export default ({ song }) => {
  return (
    <li>
      <div>
        <img src={song.artworkUrl} />
      </div>
      <h3>{song.song_name}</h3>
    </li>
  );
}
