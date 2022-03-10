import { connect } from "react-redux";
import MessageIndexItem from "./messageIndexItem";

const mSTP = (state, ownProps) => {
    return {
        author: state.entities.users[ownProps.message.author_id]
    }
}

const mDTP = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(MessageIndexItem)