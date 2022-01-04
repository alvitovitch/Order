import {
    LOGOUT_USER,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions'

const _nullUser = Object.freeze({id: null})

const SessionReducer = (oldState = {}, action) => {

    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.user.id }
        case LOGOUT_USER:
            return _nullUser
            
        default:
            return oldState;    
    }

}

export default SessionReducer