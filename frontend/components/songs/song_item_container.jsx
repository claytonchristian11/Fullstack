import { connect } from 'react-redux';
import React from 'react';
import SongItem from './song_item';
import { receivePlaySong } from '../../actions/song_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  receivePlaySong: song => dispatch(receivePlaySong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongItem);
