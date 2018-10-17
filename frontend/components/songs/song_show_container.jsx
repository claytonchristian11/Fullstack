import { connect } from 'react-redux';
import React from 'react';
import SongShow from './song_show';
import { receivePlaySong, deleteSong } from '../../actions/song_actions';

const mapStateToProps = state => ({
  song: state.entities.songShow
});

const mapDispatchToProps = dispatch => ({
  receivePlaySong: song => dispatch(receivePlaySong(song)),
  receiveDeleteSong: song => dispatch(deleteSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);
