import { connect } from "react-redux";
import { fetchChannels } from "../../actions/channel_actions";
import ChannelIndex from "./channelIndex";


const mSTP = state => {
    return{
        channels: Object.values(state.entities.channels)
    }
}

const mDTP = dispatch => {
    return {
        fetchChannels: (serverId, categoryId) => dispatch(fetchChannels(serverId, categoryId))
    }
}

export default connect(mSTP, mDTP)(ChannelIndex)