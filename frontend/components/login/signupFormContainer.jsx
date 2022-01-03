import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../../actions/session_actions';
import SignupForm from './signupForm';


const mSTP = ({ errors }) => {
    return {
        errors: errors,
        formType: 'signup',
        navLink: <Link to="/login">log in instead</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(createUser(user))
    }
}

export default connect(mSTP, mDTP)(SignupForm)