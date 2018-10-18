import React from 'react';
import { connect } from 'react-redux';
import profile from './profile';

const mapStateToProps = state => ({
  currUserId: state.session.id,
  currUsername: state.session.name
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(profile);
