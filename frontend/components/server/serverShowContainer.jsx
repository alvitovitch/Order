import { connect } from "react-redux"
import ServerShow from "./serverShow"
import {
    fetchServers,
    fetchServer
} from "../../actions/server_actions"
import {
    fetchCategories,
    patchCategory,
    removeCategory
} from "../../actions/category_actions"
const mSTP = (state, ownProps) => {
  return  {
    servers: state.entities.servers,
    server: state.entities.servers[ownProps.match.params[0]],
    categories: Object.values(state.entities.categories),
    channels: state.entities.channels
    }
}

const mDTP = dispatch => {
    return {
        fetchServer: serverId => dispatch(fetchServer(serverId)),
        fetchCategories: serverId => dispatch(fetchCategories(serverId)),
        getServers: () => dispatch(fetchServers())


    }
}

export default connect(mSTP, mDTP)(ServerShow)