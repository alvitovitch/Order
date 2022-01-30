import { connect } from "react-redux";
import FriendIndexItem from "./friendIndexItem";


const mSTP = state => {
    debugger
    return {
        servers: state.entities.servers,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(FriendIndexItem)