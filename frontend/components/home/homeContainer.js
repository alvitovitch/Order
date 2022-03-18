import { connect } from "react-redux";
import { logoutSessionUser } from "../../actions/session_actions";
import { fetchServers } from "../../actions/server_actions";
import Home from "./home";
import { fetchUsers } from "../../actions/user_actions";
import { fetchFriendships } from "../../actions/friendship_actions";

const mSTP = (state) => {
    return {
        currentUser:  state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        friendships: state.entities.friendships
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutSessionUser()),
    getServers: () => dispatch(fetchServers()),
    getUsers: () => dispatch(fetchUsers()),
    getFriendships: () => dispatch(fetchFriendships())
})

export default connect(mSTP, mDTP)(Home)