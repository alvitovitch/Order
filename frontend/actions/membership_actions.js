import * as membershipApiUtil from '../util/membership_api_util'
export const RECEIVE_MEMBERSHIPS = 'RECEIVE_MEMBERSHIPS'
const receiveMemberships = memberships => ({
    type: RECEIVE_MEMBERSHIPS,
    memberships
})

export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP'
const receiveMembership = membership => {
    return {
    type: RECEIVE_MEMBERSHIP,
    membership
}}

export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP'
const removeMembership = membershipId => ({
    type: REMOVE_MEMBERSHIP,
    membershipId
})


export const fetchMemberships = (serverId) => dispatch => {
    return (membershipApiUtil.fetchMemberships(serverId)
        .then(memberships => dispatch(receiveMemberships(memberships)))
    )}

export const fetchMembership = (serverId, membershipId) => dispatch => (
    membershipApiUtil.fetchMembership(serverId, membershipId)
        .then(membership => dispatch(receiveMembership(membership)))
)

export const createMembership = (serverId, membership) => dispatch => (
    membershipApiUtil.createMembership(serverId, membership)
        .then(membership => dispatch(receiveMembership(membership)))
)

export const patchMembership = (serverId, membershipId, membership) => dispatch => (
    membershipApiUtil.updateMembership(serverId, membershipId, membership)
        .then(membership => dispatch(receiveMembership(membership.id)))
)

export const deleteMembership = (serverId, membershipId) => dispatch => (
    membershipApiUtil.deleteMembership(serverId, membershipId)
        .then(membership => dispatch(removeMembership(membership.id)))
)