import { connect } from "react-redux";
import SelectedChannelPage from "./selectedChannelPage";
import {fetchMessages, fetchMessage, createMessage} from '../../actions/message_actions'

const mSTP = (state, ownProps) => {
    return{
        channel: state.entities.channels[ownProps.match.params[1]],
        messages: state.entities.messages
    }
}

const mDTP = (dispatch, ownProps) => {
    return{
        fetchMessages: (serverId, categoryId, channelId) => dispatch(fetchMessages(serverId, categoryId, channelId))
    }
}

export default connect(mSTP, mDTP)(SelectedChannelPage)