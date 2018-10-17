import { RECEIVE_SHOW_SONG } from '../actions/song_actions';
import merge from 'lodash/merge';

const songShowReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SHOW_SONG:
      return action.song;
    default:
      return oldState;

  }
};

export default songShowReducer;
