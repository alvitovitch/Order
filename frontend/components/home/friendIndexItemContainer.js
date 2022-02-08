import { connect } from "react-redux";
import { createFriendship, deleteFriendship } from "../../actions/friendship_actions";
import FriendIndexItem from "./friendIndexItem";


const mSTP = state => {
    
    return {
        servers: state.entities.servers,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        friendships: state.entities.friendships
    }
}

const mDTP = dispatch => {
    return {
        deleteFriendship: (userId, friendshipId) => dispatch(deleteFriendship(userId, friendshipId)),
        createFriendship: (userId, friendship) => dispatch(createFriendship(userId, friendship))
    }
}

export default connect(mSTP, mDTP)(FriendIndexItem)