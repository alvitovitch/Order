import { connect } from "react-redux";
import SettingsModal from "./settingsModal";
import { logoutSessionUser } from "../../actions/session_actions";
import { updateUser } from "../../actions/user_actions";

const mSTP = state => {
    return {
        currentUser:  state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logoutSessionUser()),
        updateUser: user => dispatch(updateUser(user))
    }
}


export default connect(mSTP, mDTP)(SettingsModal)