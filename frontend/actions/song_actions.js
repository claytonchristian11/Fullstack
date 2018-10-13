import * as APIUtil from '../util/song_util';

export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';

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
