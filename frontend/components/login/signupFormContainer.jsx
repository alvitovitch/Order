import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createUser, removeSessionErrors } from '../../actions/session_actions';
import SignupForm from './signupForm';


const mSTP = ({ errors }) => {
    return {
        errors: errors.session
      
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(createUser(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
}

export default connect(mSTP, mDTP)(SignupForm)