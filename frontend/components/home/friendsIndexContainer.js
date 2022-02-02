import { connect } from "react-redux";
import { fetchFriendships } from "../../actions/friendship_actions";
import FriendsIndex from "./friendsIndex";


const mSTP = state => {
    return {
        friendships: state.entities.friendships,
        users: state.entities.users,
        currentUser:  state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => {
    return {
        fetchFriendships: (userId) => dispatch( fetchFriendships(userId))
    }
}


export default connect(mSTP, mDTP)(FriendsIndex)