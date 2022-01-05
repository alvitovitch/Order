
import * as SessionApiUtil from '../util/session_api_util'

// What are the actions I want to do


//login user
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
const loginUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const LOGOUT_USER = 'LOGOUT_USER'
const logoutUser = () => ({
    type: LOGOUT_USER
})

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });

export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS'

export const removeSessionErrors = () => (
    {
        type: REMOVE_SESSION_ERRORS
    }
)

// export const SIGNUP_USER = 'SIGNUP_USER'
// const signupUser = user => ({
//     type: SIGNUP_USER,
//     user
// })


export const createUser = user => dispatch => (
    SessionApiUtil.signup(user)
        .then(user => dispatch(loginUser(user)), err => (
            dispatch(receiveErrors(err.responseJSON))
          ) )
)


export const loginSessionUser = user => dispatch => {
    
    return SessionApiUtil.login(user)
        .then(user => dispatch(loginUser(user)), err => (
            dispatch(receiveErrors(err.responseJSON))
          ))
}

export const logoutSessionUser = () => dispatch => (
    SessionApiUtil.logout()
        .then( () => dispatch(logoutUser()))
)

