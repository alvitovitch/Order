import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS, REMOVE_USER, RECEIVE_USER} from '../actions/user_actions'
import { LOGOUT_USER } from "../actions/session_actions";

const UsersReducer = ( oldState= {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user
            return newState
        case RECEIVE_USERS:
            return action.users
        case RECEIVE_USER:
            newState[action.user.id] = action.user
            return newState
        case REMOVE_USER:
            delete newState[action.user.id]
            return newState
        case LOGOUT_USER:
            return {}
        default:
            return oldState
    }
}

export default UsersReducer