import { connect } from "react-redux";
import FriendsIndex from "./friendsIndex";


const mSTP = state => {
    return {
        friendships: state.entities.friendships,
        users: state.entities.users
    }
}

const mDTP = dispatch => {
    return {

    }
}


export default connect(mSTP, mDTP)(FriendsIndex)