import { connect } from "react-redux";
import JoinServer from "./joinServer";
import { createMembership, fetchMemberships } from "../../actions/membership_actions";



const mSTP = (state, ownProps) => {
    debugger
    return{
        servers: state.entities.servers,
        categories: Object.values(state.entities.categories),
        channels: state.entities.channels,
        users: state.entities.users,
        currentUser:  state.entities.users[state.session.id],
        memberships: state.entities.memberships
    }
}

const mDTP = dispatch => {
    return{
        createMembership: (serverId, membership) => dispatch(createMembership(serverId, membership)),
        fetchMemberships: (serverId) => dispatch(fetchMemberships(serverId))
    }
}

export default connect(mSTP, mDTP)(JoinServer)