import {
    RECEIVE_SERVERS,
    RECEIVE_SERVER,
    DELETE_SERVER
} from '../actions/server_actions'
import { LOGOUT_USER } from "../actions/session_actions";


const ServersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        
        case RECEIVE_SERVERS:
            return Object.assign({}, action.servers) 

        case RECEIVE_SERVER:
            return Object.assign({}, oldState, { [action.server.id]: action.server})

        case DELETE_SERVER:
            delete newState[action.serverId]
            return newState
        case LOGOUT_USER:
            return {}
        default:
            return oldState
    }
}

export default ServersReducer