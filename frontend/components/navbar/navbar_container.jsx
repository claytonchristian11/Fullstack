import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import navbar from './navbar';

const mapStateToProps = state => ({
  currUserId: state.session.id,
  currUsername: state.session.name
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
