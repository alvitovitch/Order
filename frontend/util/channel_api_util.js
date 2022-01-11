// get the all the current server's categories

export const fetchChannels = (serverId, categoryId) => (
    $.ajax({
        url: `/api/servers/${serverId}/categories/${categoryId}/channels`,
        method: 'GET'
    })
)

// get a single category

export const fetchChannel = (serverId, categoryId, channelId) => (
    $.ajax({
        url: `/api/servers/${serverId}/categories/${categoryId}/channels/${channelId}`,
        method: 'GET'
    })
)

// create a category

export const createChannel = (serverId, categoryId, channel) => 
    {
return $.ajax({
        url: `/api/servers/${serverId}/categories/${categoryId}/channels`,
        method: 'POST',
        data: channel
    })
    }

export const updateChannel = (serverId, categoryId, channel) => (
    $.ajax({
        url: `/api/servers/${serverId}/categories/${categoryId}/channels/${channel.id}`,
        method: 'PATCH',
        data: channel
    })
)

export const deleteChannel = (serverId, categoryId, channelId) => (
    $.ajax({
        url: `/api/servers/${serverId}/categories/${categoryId}/channels/${channelId}`,
        method: 'DELETE'
    })
)