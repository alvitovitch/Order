import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS} from '../actions/user_actions'
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
        case LOGOUT_USER:
            return {}
        default:
            return oldState
    }
}

export default UsersReducer