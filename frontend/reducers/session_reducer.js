import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        id: action.currentUser.id,
        name: action.currentUser.username
      };
    case LOGOUT_CURRENT_USER:
      return {id: null};
    default:
      return oldState;
  }
};

export default sessionReducer;
