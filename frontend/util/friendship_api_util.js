// get the all the user's friendships

export const fetchFriendships = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/friendships`,
        method: 'GET'
    })
)

// get a single friendship

export const fetchFriendship = (userId, friendshipId) => (
    $.ajax({
        url: `/api/users/${userId}/friendships/${friendshipId}`,
        method: 'GET'
    })
)

// create a Friendship

export const createFriendship = (userId, friendship) => (
    $.ajax({
        url: `/api/users/${userId}/friendships`,
        method: 'POST',
        data: friendship
    })
)

export const deleteFriendship = (userId, friendshipId) => (
    $.ajax({
        url: `/api/users/${userId}/friendships/${friendshipId}`,
        method: 'DELETE'
    })
)