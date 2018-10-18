import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CURRENT_PIC } from '../actions/song_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.currentUser.id]: action.currentUser});
    case RECEIVE_CURRENT_PIC:
      return merge({}, oldState, { userPic: 'la'});
    default:
      return oldState;
  }
};

export default usersReducer;
