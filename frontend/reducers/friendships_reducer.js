import { RECEIVE_FRIENDSHIP,
        RECEIVE_FRIENDSHIPS,
        REMOVE_FRIENDSHIP
 } from "../actions/friendship_actions";
import { LOGOUT_USER } from "../actions/session_actions";

const FriendshipsReducer = (oldState = {}, action ) => {
Object.freeze(oldState)
let newState = Object.assign({}, oldState)
switch (action.type) {
    case RECEIVE_FRIENDSHIPS:
        newState = Object.assign(newState, action.friendships)
        return newState
    case RECEIVE_FRIENDSHIP:
        newState[action.friendship.id] = action.friendship
        return newState
    case REMOVE_FRIENDSHIP:
        delete newState[action.freindshipId]
        return newState
    case LOGOUT_USER:
        return {}
    default:
        return oldState
    }
}

export default FriendshipsReducer