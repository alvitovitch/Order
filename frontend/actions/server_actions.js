import * as serverApiUtil from '../util/server_api_util'

// receive_servers, receive_server, update_server, delete_server


export const RECEIVE_SERVERS = 'RECEIVE_SERVERS'
const receiveServers = servers => ({
    type: RECEIVE_SERVERS,
    servers
})


export const RECEIVE_SERVER = 'RECEIVE_SERVER'
const receiveServer = server => ({
    type: RECEIVE_SERVER,
    server
})


export const DELETE_SERVER = 'DELETE_SERVER'
const deleteServer = serverId => ({
    type: DELETE_SERVER,
    serverId
})


export const fetchServers = () => dispatch => (
    serverApiUtil.fetchServers()
        .then(servers => dispatch(receiveServers(servers)))
)

export const fetchServer = serverId => dispatch => (
    serverApiUtil.fetchServer(serverId)
        .then(server => dispatch(receiveServer(server)))
)

export const patchServer = server => dispatch => (
    serverApiUtil.patchServer(server)
    // after updating the server go to the server show page
        .then(server => dispatch(receiveServer(server.id)))
)

export const createServer = server => dispatch => {
    return serverApiUtil.createServer(server)
        .then(server => dispatch(receiveServer(server)))
}

    // delete server and then fetch the server index
export const removeServer = serverId => dispatch => (
    serverApiUtil.removeServer(serverId)
        .then((server) => dispatch(deleteServer(server.id)))
)