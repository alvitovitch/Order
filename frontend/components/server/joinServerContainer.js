import { connect } from "react-redux";
import JoinServer from "./joinServer";
import { createMembership } from "../../actions/membership_actions";



const mSTP = state => {
    return{

    }
}

const mDTP = dispatch => {
    return{
        createMembership: (serverId, membership) => dispatch(createMembership(serverId, membership))
    }
}

export default connect(mSTP, mDTP)(JoinServer)