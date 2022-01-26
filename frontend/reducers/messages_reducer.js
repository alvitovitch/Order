import { 
    RECEIVE_MESSAGES, RECEIVE_MESSAGE
} from '../actions/message_actions'
import { LOGOUT_USER } from "../actions/session_actions";

const MessagesReducer = (oldState = {}, action ) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_MESSAGES:
            return action.messages
        case RECEIVE_MESSAGE:
            newState[action.message.id] = action.message
            return newState
        case LOGOUT_USER:
            return {}
        default:
            return oldState;
    }
}

export default MessagesReducer