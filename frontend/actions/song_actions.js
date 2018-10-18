import * as APIUtil from '../util/song_util';

export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_PLAY_SONG = 'RECEIVE_PLAY_SONG';
export const RECEIVE_SHOW_SONG = 'RECEIVE_SHOW_SONG';
export const RECEIVE_DELETE_SONG = 'RECEIVE_DELETE_SONG';
export const RECEIVE_EDIT_SONG = 'RECEIVE_EDIT_SONG';
export const RECEIVE_CURRENT_PIC = 'RECEIVE_CURRENT_PIC';

export const receivePic = pic => dispatch => (
  APIUtil.receivePic(pic)
  .then(pic => dispatch(receiveCurrentPic(pic)),
  err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const editSong = song => dispatch => {
  return (

  APIUtil.editSong(song)
  .then(song => dispatch(receiveEditSong(song)),
  err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
};

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

export const fetchSong = id => dispatch => (
  APIUtil.fetchSong(id).then(song => (
    dispatch(receiveShowSong(song))
  ))
);

export const deleteSong = song => dispatch => (
  APIUtil.deleteSong(song).then(() => (
    dispatch(receiveDeleteSong(song))
  ))
);

export const receiveCurrentPic = user => {
  return {
    type: RECEIVE_CURRENT_PIC,
    user
  };
};

export const receiveEditSong = song => {
  return {
    type: RECEIVE_EDIT_SONG,
    song
  };
};

export const receiveShowSong = song => {
  return {
    type: RECEIVE_SHOW_SONG,
    song
  };
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

export const receiveDeleteSong = song => ({
  type: RECEIVE_DELETE_SONG,
  song
});
