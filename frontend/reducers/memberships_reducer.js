import { RECEIVE_MEMBERSHIP,
        RECEIVE_MEMBERSHIPS,
        REMOVE_MEMBERSHIP
 } from "../actions/membership_actions";
import { LOGOUT_USER } from "../actions/session_actions";

const MembershipsReducer = (oldState = {}, action ) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_MEMBERSHIPS:
            newState = Object.assign(newState, action.memberships)
            return action.memberships
        case RECEIVE_MEMBERSHIP:
            newState[action.membership.id] = action.membership
            return newState
        case REMOVE_MEMBERSHIP:
            delete newState[action.membershipId]
            return newState
        case LOGOUT_USER:
            return {}
        default:
            return oldState
    }
}

export default MembershipsReducer