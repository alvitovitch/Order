

export const fetchMessages = (serverId, categoryId, channelId) => (
    $.ajax({
        url: `/api/servers/${serverId}/categories/${categoryId}/channels/${channelId}/messages`,
        method: 'GET'
    })
)

export const fetchMessage = (serverId, categoryId, channelId, messageId) => (
    $.ajax({
        url: `/api/servers/${serverId}/categories/${categoryId}/channels/${channelId}/messages/${messageId}`,
        method: 'GET'
    })
)

export const createMessage = (serverId, categoryId, channelId, message) => (
    $.ajax({
        url: `/api/servers/${serverId}/categories/${categoryId}/channels/${channelId}/messages/`,
        method: 'POST',
        data: message
    })
)