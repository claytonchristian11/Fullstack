import { RECEIVE_CURRENT_SONG, RECEIVE_ALL_SONGS, RECEIVE_PLAY_SONG } from '../actions/song_actions';
import merge from 'lodash/merge';

const songReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      return merge({}, oldState, action.song);
    case RECEIVE_ALL_SONGS:
      const songs = {};
      let songsarr = Object.values(action.songs);
        songsarr.forEach(song => {
          songs[song.id] = song;
        });
      return songs;
    default:
      return oldState;
  }
};

export default songReducer;
