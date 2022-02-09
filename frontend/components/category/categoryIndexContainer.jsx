import { connect } from 'react-redux';
import React from 'react';
import CategoryIndex from './categoryIndex';
import { createChannel } from '../../actions/channel_actions';
import { fetchCategories, createCategory, deleteCategory, patchCategory } from '../../actions/category_actions'
import { patchServer } from '../../actions/server_actions';

const mSTP = (state, ownProps) => {
    return {
        categories: Object.values(state.entities.categories),
        currentUser:  state.entities.users[state.session.id],
    }
    }

const mDTP = dispatch => {
    return {
        fetchCategories: serverId => dispatch(fetchCategories(serverId)),
        createCategory: (serverId, category) => dispatch(createCategory(serverId, category)),
        createChannel: (category, channel) => dispatch(createChannel(category.server_id, category.id, channel)),
        patchCategory: (serverId, category) => dispatch(patchCategory(serverId, category)),
        patchServer: (server) => dispatch(patchServer(server))
    }
}


export default connect(mSTP, mDTP)(CategoryIndex)