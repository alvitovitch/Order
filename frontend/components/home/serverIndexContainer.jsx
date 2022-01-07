import { connect } from 'react-redux';
import React from 'react';
import ServerIndex from './serverIndex';

const mSTP = state => {
    return {
        servers: Object.values(state.entities.servers)
    }
    }

const mDTP = dispatch => ({

})


export default connect(mSTP, mDTP)(ServerIndex)