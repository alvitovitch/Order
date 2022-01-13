import * as messageApiUtil from '../util/message_api_util'

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages
})

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
})

export const fetchMessages = (serverId, categoryId, channelId) => dispatch => {
    return (messageApiUtil.fetchMessages(serverId, categoryId, channelId)
        .then(messages => dispatch(receiveMessages(messages)))
    )
}

export const fetchMessage = (serverId, categoryId, channelId, messageId) => dispatch => {
    return (messageApiUtil.fetchMessage(serverId, categoryId, channelId, messageId)
    .then(message => dispatch(receiveMessage(message))))
} 

export const createMessage = (serverId, categoryId, channelId, message) => dispatch => {
    return (messageApiUtil.createMessage(serverId, categoryId, channelId, message)
    .then(message => dispatch(receiveMessage(message))))
}