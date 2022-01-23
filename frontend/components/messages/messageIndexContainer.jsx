import { connect } from "react-redux";
import MessageIndex from "./messageIndex";
import { createMessage, fetchMessages } from "../../actions/message_actions";


const mSTP = state => {
    return {
        messages: state.entities.messages,
        users: state.entities.users
    }
}

const mDTP = dispatch => (
    {
        fetchMessages: (serverId, categoryId, channelId) => dispatch(fetchMessages(serverId, categoryId, channelId)),
        createMessage: (serverId, categoryId, channelId, message) => dispatch(createMessage(serverId, categoryId, channelId, message))
    }
)

export default connect(mSTP, mDTP)(MessageIndex)