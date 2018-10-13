import { connect } from 'react-redux';
import React from 'react';
import songUpload from './song_upload';
import { receiveSong } from '../../actions/song_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
});

const mapDispatchToProps = dispatch => ({
  receiveSong: song => dispatch(receiveSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(songUpload);
