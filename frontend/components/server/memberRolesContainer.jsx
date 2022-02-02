import { connect } from "react-redux";
import MemberRoles from "./memberRoles";
import { createFriendship, deleteFriendship } from "../../actions/friendship_actions";


const mSTP = state => {
    return {
        currentUser:  state.entities.users[state.session.id],
        users: state.entities.users,
        friendships: state.entities.friendships

    }
}


const mDTP = dispatch => {
    return {
        createFriendship: (userId, friendship) => dispatch(createFriendship(userId, friendship)),
        deleteFriendship: (userId, friendshipId) => dispatch(deleteFriendship(userId, friendshipId))
    }
}


export default connect(mSTP, mDTP)(MemberRoles)