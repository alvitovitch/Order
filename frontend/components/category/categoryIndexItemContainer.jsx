import { connect } from "react-redux";
import CategoryIndexItem from "./categoryIndexItem";

import { deleteCategory } from '../../actions/category_actions'
import { createChannel } from '../../actions/channel_actions'
const mSTP = state => {
    return {
        currentUser:  state.entities.users[state.session.id],

    }
}

const mDTP = dispatch => (
    {
        deleteCategory: category => dispatch(deleteCategory(category.server_id, category.id)),
    }
)

export default connect(mSTP, mDTP)(CategoryIndexItem)