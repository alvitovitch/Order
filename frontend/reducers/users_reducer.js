import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECIEVE_USERS} from '../actions/user_actions'

const UsersReducer = ( oldState= {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user})
        case RECIEVE_USERS:
            return action.users
        default:
            return oldState
    }
}

export default UsersReducer