import * as usersUtil from '../util/users_api_util'

export const RECIEVE_USERS = 'RECEIVE_USERS'
const receiveUsers = users => (
    {
        type: receiveUsers,
        users
    }
)

export const RECIEVE_USER = 'RECEIVE_USER'
