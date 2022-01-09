import { connect } from "react-redux"
import ServerShow from "./serverShow"
import {fetchServer} from "../../actions/server_actions"
const mSTP = (state, ownProps) => {
  return  {
    server: state.entities.servers[ownProps.match.params[0]]
    }
}

const mDTP = (dispatch, ownProps) => {
    
    return {
        fetchServer: () => dispatch(fetchServer(ownProps.match.params[0]))
    }
}

export default connect(mSTP, mDTP)(ServerShow)