import { connect } from 'react-redux';
import React from 'react';
import sessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
    Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
