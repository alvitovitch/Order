// What I want to do
// Get all servers - testing purposes only?

export const fetchServers = () => (
    {
        url: '/api/servers',
        method: 'GET'
    }
)


// get a single server

export const fetchServer = serverId => (
    {
        url: `/api/servers/${serverId}`,
        method: 'GET'
    }
)

// make a server

export const createServer = server => (
    {
        url: `/api/servers`,
        method: 'POST',
        data: server
    }
)
// update a server

export const patchServer = server => (
    {
        url: `/api/servers/${server.id}`,
        method: 'PATCH',
        data: server
    }
)
// delete a server

export const deleteServer = serverId => (
    {
        url: `/api/servers/${serverId}`,
        method: 'DETETE'
    }
)

