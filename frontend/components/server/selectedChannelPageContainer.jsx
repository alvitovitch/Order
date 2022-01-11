import { connect } from "react-redux";
import SelectedChannelPage from "./selectedChannelPage";

const mSTP = (state, ownProps) => {
    return{
        channel: state.entities.channels[ownProps.match.params[1]]
    }
}

const mDTP = (dispatch, ownProps) => {
    return{

    }
}

export default connect(mSTP, mDTP)(SelectedChannelPage)