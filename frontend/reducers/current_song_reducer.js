import { RECEIVE_PLAY_SONG } from '../actions/song_actions';
import merge from 'lodash/merge';

const currentSongReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PLAY_SONG:
      let newState =  action.song;
      return newState;
    default:
      return oldState;
  }
};

export default currentSongReducer;
