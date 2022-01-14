import { connect } from "react-redux";
import MessageIndexItem from "./messageIndexItem";
import { User} from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return {
        author: state.entities.users[ownProps.message.author_id]
    }
}

const mDTP = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser())
    }
}

export default connect(mSTP, mDTP)(MessageIndexItem)