import { connect } from 'react-redux';
import React from 'react';
import CategoryIndex from './categoryIndex';
import { fetchCategories } from '../../actions/category_actions'

const mSTP = (state, ownProps) => {
    return {
        categories: Object.values(state.entities.categories)
    }
    }

const mDTP = (dispatch, ownProps) => {
    return {
        fetchCategories: serverId => dispatch(fetchCategories(serverId))
    }
}


export default connect(mSTP, mDTP)(CategoryIndex)