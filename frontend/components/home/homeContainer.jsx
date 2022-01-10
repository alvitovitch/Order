import React from "react";
import { connect } from "react-redux";
import { logoutSessionUser } from "../../actions/session_actions";
import { fetchServers } from "../../actions/server_actions";
import Home from "./home";

const mSTP = state => {
    return {
        currentUser:  state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers)
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutSessionUser()),
    getServers: () => dispatch(fetchServers())
})

export default connect(mSTP, mDTP)(Home)