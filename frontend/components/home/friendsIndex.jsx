import React from "react";

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friendships: this.props.friendships
        }
    }


    render() {
        debugger
        if (this.state.friendships.outgoing !== undefined)
        {
            const selectedFriends = Object.values(this.state.friendships.outgoing)
            const mappedFriends = selectedFriends.map( friendship => (
                <div className='friendItem'> 
                <img className='friendItemAvatar' src={window.userAvatar} alt="" />
                    <div>
                        {this.props.users[friendship['user_id']].username}
                    </div>
                </div>
            ))
            
        }
        return(
            <div id='friends-index'>
                <div id='friends-index-top-bar'>
                    <img id='friendImage' src={window.people} alt="" />
                    <div id='friend-index-options'>
                        <div id='online'>Online</div>
                        <div id='all'>All</div>
                        <div id='pending'>Pending</div>
                        <div id='blocked'>Blocked</div>
                    </div>
                </div>
                <div id='friends-list'>
                </div>
            </div>
        )
    }
}


export default FriendsIndex