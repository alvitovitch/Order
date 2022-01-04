import React from "react";
import { connect } from "react-redux";
import { logoutSessionUser } from "../../actions/session_actions";
import Home from "./home";

const mSTP = state => {
    return {
        currentUser:  state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutSessionUser())
})

export default connect(mSTP, mDTP)(Home)