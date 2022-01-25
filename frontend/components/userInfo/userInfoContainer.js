import UserInfo from "./userInfo";
import { connect } from "react-redux";

const mSTP = state => {
    return {
        currentUser:  state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => {
    return {

    }
}


export default connect(mSTP, mDTP)(UserInfo)