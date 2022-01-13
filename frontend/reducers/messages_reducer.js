import { 
    RECEIVE_MESSAGES, RECEIVE_MESSAGE
} from '../actions/message_actions'

const MessagesReducer = (oldState = {}, action ) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_MESSAGES:
            debugger
            return action.messages
        case RECEIVE_MESSAGE:
            newState[action.message.id] = action.message
            return newState
        default:
            return oldState;
    }
}

export default MessagesReducer