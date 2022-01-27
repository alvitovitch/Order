import * as friendshipApiUtil from '../util/friendship_api_util'

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP'
const receiveFriendship = friendship => 
    (
        {
            type: RECEIVE_FRIENDSHIP,
            friendship
        }
    )

export const RECEIVE_FRIENDSHIPS = 'RECEIVE_FRIENDSHIPS'
const receiveFriendships = friendships =>
(
    {
        type: RECEIVE_FRIENDSHIPS,
        friendships
    }
)

export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP'
const removeFriendship = friendshipId => 
(
    {
        type: REMOVE_FRIENDSHIP,
        friendshipId
    }
)

export const fetchFriendships = userId => dispatch => (
    friendshipApiUtil.fetchFriendships(userId)
        .then(friendships => dispatch(receiveFriendships(friendships)))
)

export const fetchFriendship = (userId, friendshipId) => dispatch => (
    friendshipApiUtil.fetchFriendship(userId, friendshipId)
        .then(friendship => dispatch(receiveFriendship(friendship)))
)

export const createFriendship = (userId, friendship) => dispatch => (
    friendshipApiUtil.createFriendship(userId, friendship)
        .then(friendship => dispatch(receiveFriendship(friendship)))
)

export const deleteFriendship = (userId, friendshipId) => dispatch => (
    friendshipApiUtil.deleteFriendship(userId, friendshipId)
        .then(friendship => dispatch(removeFriendship(friendship)))
)