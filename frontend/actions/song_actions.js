import * as APIUtil from '../util/song_util';

export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_PLAY_SONG = 'RECEIVE_PLAY_SONG';

export const receiveSong = song => dispatch => (
  APIUtil.receiveSong(song)
  .then(song => dispatch(receiveCurrentSong(song)),
  err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchAllSongs = () => dispatch => {
  let songs1 = APIUtil.fetchAllSongs();
  return (
  APIUtil.fetchAllSongs()
  .then(songs => dispatch(fetchAllSongsAction(songs)),
  err => (
      dispatch(receiveErrors(err.responseJSON))
  ))
);
};

export const receivePlaySong = song => {
  return {
    type: RECEIVE_PLAY_SONG,
    song
  };
};

export const fetchAllSongsAction = songs => {
  return {
  type: RECEIVE_ALL_SONGS,
  songs
};};

export const receiveCurrentSong = song => ({
  type: RECEIVE_CURRENT_SONG,
  song
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
