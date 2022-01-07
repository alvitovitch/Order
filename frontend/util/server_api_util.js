// What I want to do
// Get all servers - testing purposes only?

export const fetchServers = () => (
    $.ajax({
        url: '/api/servers',
        method: 'GET'
    })
)


// get a single server

export const fetchServer = serverId => (
    $.ajax({
        url: `/api/servers/${serverId}`,
        method: 'GET'
    })
)

// make a server

export const createServer = server => (
    $.ajax({
        url: `/api/servers`,
        method: 'POST',
        data: server
    })
)
// update a server

export const patchServer = server => (
    $.ajax({
        url: `/api/servers/${server.id}`,
        method: 'PATCH',
        data: server
    })
)
// delete a server

export const removeServer = serverId => (
    $.ajax({
        url: `/api/servers/${serverId}`,
        method: 'DETETE'
    })
)

