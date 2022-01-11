import * as channelApiUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'
const receiveChannels = channels => ({
    type: RECEIVE_CHANNELS,
    channels
})

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'
const receiveChannel = channel => {
    return {
    type: RECEIVE_CHANNEL,
    channel
}}

export const REMOVE_CHANNEL = 'REMOVE_CHANNEL'
const removeChannel = channelId => ({
    type: REMOVE_CHANNEL,
    channelId
})


export const fetchChannels = (serverId, categoryId) => dispatch => {
    return (channelApiUtil.fetchChannels(serverId, categoryId)
        .then(channels => dispatch(receiveChannels(channels)))
    )}

export const fetchChannel = (serverId, categoryId, channelId) => dispatch => (
    channelApiUtil.fetchChannel(serverId, categoryId, channelId)
        .then(channel => dispatch(receiveChannel(channel)))
)

export const createChannel = (serverId, categoryId, channel) => dispatch => (
    channelApiUtil.createChannel(serverId, categoryId, channel)
        .then(channel => dispatch(receiveChannel(channel)))
)

export const patchChannel = (serverId, categoryId, channel) => dispatch => (
    channelApiUtil.updateChannel(serverId, categoryId, channel)
        .then(channel => dispatch(receiveChannel(channel.id)))
)

export const deleteChannel = (serverId, categoryId, channelId) => dispatch => (
    channelApiUtil.deleteChannel(serverId, categoryId, channelId)
        .then(channel => dispatch(removeChannel(channel.id)))
)