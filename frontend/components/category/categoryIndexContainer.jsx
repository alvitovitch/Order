import { connect } from 'react-redux';
import React from 'react';
import CategoryIndex from './categoryIndex';
import { fetchCategories, createCategory } from '../../actions/category_actions'

const mSTP = (state, ownProps) => {
    return {
        categories: Object.values(state.entities.categories)
    }
    }

const mDTP = (dispatch, ownProps) => {
    return {
        fetchCategories: serverId => dispatch(fetchCategories(serverId)),
        createCategory: (serverId, category) => dispatch(createCategory(serverId, category))
    }
}


export default connect(mSTP, mDTP)(CategoryIndex)