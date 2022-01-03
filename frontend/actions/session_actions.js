
import * as SessionApiUtil from '../util/session_api_util'

// What are the actions I want to do


//login user
export const LOGIN_USER = 'LOGIN_USER'
const loginUser = user => ({
    type: LOGIN_USER,
    user
})

export const LOGOUT_USER = 'LOGOUT_USER'
const logoutUser = () => ({
    type: LOGOUT_USER
})

// export const SIGNUP_USER = 'SIGNUP_USER'
// const signupUser = user => ({
//     type: SIGNUP_USER,
//     user
// })


export const createUser = user => dispatch => (
    SessionApiUtil.signup(user)
        .then(user => dispatch(loginUser(user)) )
)


export const loginSessionUser = user => dispatch => (
    SessionApiUtil.login(user)
        .then(user => dispatch(loginUser(user)))
)

export const logoutSessionUser = () => dispatch => (
    SessionApiUtil.logout()
        .then( () => dispatch(logoutUser()))
)

