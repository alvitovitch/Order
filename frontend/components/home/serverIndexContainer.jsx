import { connect } from 'react-redux';
import React from 'react';
import ServerIndex from './serverIndex';
import { createServer } from '../../actions/server_actions';

const mSTP = (state, ownProps) => {
    
    return {
        servers: Object.values(state.entities.servers)
    }
    }

const mDTP = dispatch => ({
    createServer: server => dispatch(createServer(server))
})


export default connect(mSTP, mDTP)(ServerIndex)