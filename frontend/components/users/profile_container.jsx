import React from 'react';
import { connect } from 'react-redux';
import profile from './profile';
import { receivePic } from '../../actions/song_actions';

const mapStateToProps = state => ({
  currUserId: state.session.id,
  currUsername: state.session.name
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receivePic: pic => dispatch(receivePic(pic))
});

export default connect(mapStateToProps, mapDispatchToProps)(profile);
