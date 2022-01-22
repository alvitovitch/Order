import * as usersUtil from '../util/users_api_util'

export const RECEIVE_USERS = 'RECEIVE_USERS'
const receiveUsers = users => (
    {
        type: RECEIVE_USERS,
        users
    }
)

export const RECEIVE_USER = 'RECEIVE_USER'
const receiveUser = user => (
    {
        type: RECEIVE_USER,
        user
    }   
)

export const fetchUser = userId => dispatch => (
    usersUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
)
export const fetchUsers = () => dispatch => (
    usersUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
)