import { connect } from 'react-redux';
import React from 'react';
import SongPlayer from './song_player';

const mapStateToProps = state => {
  return {
    currentSong: state.entities.currentSong
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SongPlayer);
