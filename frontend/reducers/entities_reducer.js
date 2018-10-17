import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import currentSongReducer from './current_song_reducer';
import songShowReducer from './song_show_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  currentSong: currentSongReducer,
  songShow: songShowReducer
});

export default entitiesReducer;
