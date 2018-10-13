import { RECEIVE_CURRENT_SONG, RECEIVE_ALL_SONGS } from '../actions/song_actions';
import merge from 'lodash/merge';

const songReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      return merge({}, oldState, action.song);
    case RECEIVE_ALL_SONGS:
      return merge({}, oldState, action.songs);
    default:
      return oldState;
  }
};

export default songReducer;
