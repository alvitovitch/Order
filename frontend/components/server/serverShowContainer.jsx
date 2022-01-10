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
    server: state.entities.servers[ownProps.match.params[0]]
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchServer: () => dispatch(fetchServer(ownProps.match.params[0])),
        fetchCategories: () => dispatch(fetchCategories(ownProps.match.params[0])),
        getServers: () => dispatch(fetchServers())


    }
}

export default connect(mSTP, mDTP)(ServerShow)