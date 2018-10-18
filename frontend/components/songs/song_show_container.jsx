import { connect } from 'react-redux';
import React from 'react';
import SongShow from './song_show';
import { receivePlaySong, deleteSong, fetchSong } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    song: state.entities.songs[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => ({
  receivePlaySong: song => dispatch(receivePlaySong(song)),
  receiveDeleteSong: song => dispatch(deleteSong(song)),
  fetchSong: songId => dispatch(fetchSong(songId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);
