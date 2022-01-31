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

export const REMOVE_USER = 'REMOVE_USER'
const removeUser = userId => (
    {
        type: REMOVE_USER,
        userId
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

export const updateUser = user => dispatch => (
    usersUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
)

export const deleteUser = (userId) => dispatch => (
    usersUtil.deleteUser(userId)
        .then(user => dispatch(removeUser(user.id)))
)