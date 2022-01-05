import React from "react";
import { connect } from "react-redux";
import { loginSessionUser, removeSessionErrors } from '../../actions/session_actions'
import Login from "./login";
import SessionForm from "./sessionForm";


const mSTP = ({ errors })=> ({
    errors: errors.session,
 
})

const mDTP = dispatch => {
    return{
    processForm: user => dispatch(loginSessionUser(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())

}}


export default connect(mSTP, mDTP)(SessionForm)