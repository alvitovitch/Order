import React from "react";
import { connect } from "react-redux";
import { logoutSessionUser } from "../../actions/session_actions";
import { fetchServers } from "../../actions/server_actions";
import Home from "./home";
import { fetchUsers } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
    debugger
    return {
        currentUser:  state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers)
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutSessionUser()),
    getServers: () => dispatch(fetchServers()),
    getUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(Home)