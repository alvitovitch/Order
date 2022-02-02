import React from "react";


class MemberRoles extends React.Component {
    constructor(props){
        super(props)
        
        this.addFriend = this.addFriend.bind(this)
    }

    

    addFriend(e) {
        this.props.createFriendship(e.currentTarget.friend, {friendship: {user_id: this.props.currentUser.id, friend_id: e.currentTarget.friend}})
        const friendButton = document.getElementById('addFriendButton')
        friendButton.style.display = 'none'
    }

    removeFriend(e) {
        const friendshipId = this.props.friendships.outgoing_friendships.filter(friendship => friendship.friend_id === e.currentTarget.friend)[0].id
        this.props.deleteFriendship(this.props.currentUser.id, friendshipId)
        const unfriendButton = document.getElementById('unFriendButton')
        unfriendButton.style.display = 'none'
    }
    
    friendMenu(e, member) {
        e.preventDefault()
        
        if (this.props.friendships.outgoing_friendships.filter(friendship => friendship.friend_id === member.id).length > 0){
            const unfriendButton = document.getElementById('unFriendButton')
            unfriendButton.style.display = 'flex'
            unfriendButton.style.left = `${e.pageX}px`
            unfriendButton.style.top = `${e.pageY}px`
            unfriendButton.friend = member.id
        } else if (member.id !== currentUser.id) {
            const friendButton = document.getElementById('addFriendButton')
            friendButton.style.display = 'flex'
            friendButton.style.left = `${e.pageX}px`
            friendButton.style.top = `${e.pageY}px`
            friendButton.friend = member.id
        }
    }

    render() {
        addEventListener('click', e => {
            const friendButton = document.getElementById('addFriendButton')
            if (e.target !== friendButton ){
                friendButton.style.display = 'none'
            }
            const unfriendButton = document.getElementById('unFriendButton')
            if (e.target !== unfriendButton) {
                unfriendButton.style.display = 'none'
            }
        })
        const Roles = Object.values(this.props.server.roles).map(role => {
            return(
                <div className="memberRoles">
                    <h1 className="roleTitle">{role.name.toUpperCase()} - {Object.values(this.props.server.members).filter(member => member.role === role.name).length}</h1>
                    <div className="member">
                        {Object.values(this.props.server.members).map(member => {
                            if (member.role === role.name){
                                return <div onContextMenu={(e) => this.friendMenu(e, member)} className='roleMember' member={member.id} key={member.id}>
                                    <img className='roleAvatar' src={window.userAvatar} alt="userAvatar" />
                                    <div className='roleUsername'>
                                        {member.username}
                                    </div>
                                        
                                    </div>
                            }})}
                    </div>
                </div>
            )
        })
        return(
            <div id='membersRoles'>
                <div id='addFriendButton' friend='' onClick={e => this.addFriend(e)} >
                    Add Friend
                </div>
                <div id='unFriendButton' friend='' onClick={e => this.removeFriend(e)} >
                    Remove Friend
                </div>
                {Roles}
            </div>
    )
    }
}

export default MemberRoles