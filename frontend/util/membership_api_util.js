// get the all the current server's categories

export const fetchMemberships = (serverId) => (
    $.ajax({
        url: `/api/servers/${serverId}/memberships`,
        method: 'GET'
    })
)

// get a single membership

export const fetchMembership = (serverId, membershipId) => (
    $.ajax({
        url: `/api/servers/${serverId}/memberships/${membershipId}`,
        method: 'GET'
    })
)

// create a membership

export const createMembership = (serverId, membership) => (
    $.ajax({
        url: `/api/servers/${serverId}/memberships/`,
        method: 'POST',
        data: membership
    })
)

export const updateMembership = (serverId, membershipId, membership) => (
    $.ajax({
        url: `/api/servers/${serverId}/memberships/${membershipId}`,
        method: 'PATCH',
        data: membership
    })
)

export const deleteMembership = (serverId, membershipId) => (
    $.ajax({
        url: `/api/servers/${serverId}/memberships/${membershipId}`,
        method: 'DELETE'
    })
)