import { connect } from "react-redux";
import { fetchChannels, deleteChannel } from "../../actions/channel_actions";
import ChannelIndex from "./channelIndex";


const mSTP = state => {
    return{
        channels: Object.values(state.entities.channels)
    }
}

const mDTP = dispatch => {
    return {
        fetchChannels: (serverId, categoryId) => dispatch(fetchChannels(serverId, categoryId)),
        deleteChannel: (serverId, categoryId, channelId) => dispatch(deleteChannel(serverId, categoryId, channelId))
    }
}

export default connect(mSTP, mDTP)(ChannelIndex)