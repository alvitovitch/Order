import { connect } from 'react-redux';
import React from 'react';
import ServerIndex from './serverIndex';
import { createServer } from '../../actions/server_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchFriendships } from '../../actions/friendship_actions';

const mSTP = (state, ownProps) => {
    
    return {
        servers: Object.values(state.entities.servers),
        users: state.entities.users,
        currentUser:  state.entities.users[state.session.id],

    }
    }

const mDTP = dispatch => ({
    createServer: server => dispatch(createServer(server)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchFriendships: userId => dispatch( fetchFriendships(userId))
})


export default connect(mSTP, mDTP)(ServerIndex)