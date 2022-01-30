import {
    RECEIVE_CHANNELS,
    RECEIVE_CHANNEL,
    REMOVE_CHANNEL
} from '../actions/channel_actions'
import { LOGOUT_USER } from "../actions/session_actions";

const ChannelsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_CHANNELS:
            Object.assign(newState, action.channels)
            return newState 
        case RECEIVE_CHANNEL:
            newState[action.channel.id] = action.channel
            return newState
        case REMOVE_CHANNEL:
            delete newState[action.channelId]
            return newState
        case LOGOUT_USER:
            return {}
        default:
            return oldState;
    }
}

export default ChannelsReducer