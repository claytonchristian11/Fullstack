import { connect } from 'react-redux';
import React from 'react';
import SongSplashItem from './song_splash_item';
import { receivePlaySong } from '../../actions/song_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  receivePlaySong: song => dispatch(receivePlaySong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongSplashItem);
