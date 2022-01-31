import { connect } from "react-redux";
import { fetchCategories } from "../../actions/category_actions";
import { fetchChannels } from "../../actions/channel_actions";
import { fetchMessages } from "../../actions/message_actions";
import SelectedDmPage from "./selectedDm";


const mSTP = (state, ownProps) => {
    debugger
    return {
        servers: state.entities.servers,
        server: state.entities.servers[ownProps.match.params[0]],
        categories: state.entities.categories,
        channels: state.entities.channels,
        channel: state.entities.servers[ownProps.match.params[0]].channel,    
        users: state.entities.users,
        currentUser:  state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => {
    return {
        fetchCategories: serverId => dispatch(fetchCategories(serverId)),
        fetchChannels: (serverId, categoryId) => dispatch(fetchChannels(serverId, categoryId)),
        fetchMessages: (serverId, categoryId, channelId) => dispatch(fetchMessages(serverId, categoryId, channelId))
    }
}


export default connect(mSTP, mDTP)(SelectedDmPage)