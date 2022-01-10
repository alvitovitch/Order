import { connect } from 'react-redux';
import React from 'react';
import ServerIndex from './serverIndex';

const mSTP = (state, ownProps) => {
    
    return {
        servers: Object.values(state.entities.servers)
    }
    }

const mDTP = dispatch => ({

})


export default connect(mSTP, mDTP)(ServerIndex)