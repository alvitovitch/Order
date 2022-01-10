import { connect } from 'react-redux';
import React from 'react';
import CategoryIndex from './categoryIndex';
import { fetchCategories } from '../../actions/category_actions'

const mSTP = state => {
    return {
        servers: Object.values(state.entities.servers)
    }
    }

const mDTP = (dispatch, ownProps) => {
    
    return {
        fetchCategories: () => dispatch(fetchCategories(ownProps.server.id))
    }
}


export default connect(mSTP, mDTP)(CategoryIndex)