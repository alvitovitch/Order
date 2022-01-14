import { connect } from "react-redux";
import MessageIndexItem from "./messageIndexItem";
import { User} from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    debugger
    return {
        author: state.entities.users[ownProps.message.author_id]
    }
}

const mDTP = dispatch => {
    debugger
    return {
        fetchUser: userId => dispatch(fetchUser())
    }
}

export default connect(mSTP, mDTP)(MessageIndexItem)