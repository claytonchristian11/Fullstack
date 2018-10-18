import { connect } from 'react-redux';
import React from 'react';
import EditSong from './song_edit';
import { editSong, receiveSong } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
  editSong: state.entities.songs[ownProps.match.params.id]
});
};


const mapDispatchToProps = dispatch => ({
  receiveSong: song => dispatch(receiveSong(song)),
  receiveEditSong: song => dispatch(editSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSong);
