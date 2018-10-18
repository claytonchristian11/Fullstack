import {
  RECEIVE_CURRENT_SONG,
  RECEIVE_ALL_SONGS,
  RECEIVE_PLAY_SONG,
  RECEIVE_DELETE_SONG,
  RECEIVE_SHOW_SONG,
  RECEIVE_EDIT_SONG
  } from '../actions/song_actions';
import merge from 'lodash/merge';

const songsReducer = (oldState = {}, action) => {
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
    case RECEIVE_EDIT_SONG:
      return merge({}, oldState, { [action.song.id]: action.song });
    case RECEIVE_SHOW_SONG:
      return { [action.song.song.id]: action.song.song};
    case RECEIVE_DELETE_SONG:
      let newState = merge({}, oldState);
      delete newState[action.song];
      return newState;
    default:
      return oldState;
  }
};

export default songsReducer;
