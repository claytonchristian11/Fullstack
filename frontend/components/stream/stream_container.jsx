import { connect } from 'react-redux';
import React from 'react';
import Stream from './stream';
import { fetchAllSongs } from '../../actions/song_actions';

const mapStateToProps = state => {
  return {
    songs: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllSongs: () => dispatch(fetchAllSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
