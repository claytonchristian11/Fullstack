import { connect } from 'react-redux';
import React from 'react';
import sessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(sessionForm));
