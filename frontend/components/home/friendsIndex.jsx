import React from "react";
import FriendIndexItemContainer from "./friendIndexItemContainer";

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        if (this.props.friendships !== undefined){
            this.setState({selected: document.getElementById('all'),
                friendships: this.props.friendships.outgoing_friendships.map(friendship => {if (friendship.mutual === true){
                    return this.props.users[friendship.friend_id]
                }}).filter(friendship => friendship !== undefined)
             })
        } 
        
    }
    
    componentDidUpdate() {
        if (this.state !== null){
            if (this.state.selected !== undefined){
                this.state.selected.style.background = 'rgba(128, 128, 128, 0.326)'
                this.state.selected.style.color = 'white'
            }
        }
        
    }

    handleClick(e) {
        this.state.selected.style.background = '';
        this.state.selected.style.color = '';
        if (e.target.id === 'all') {
                this.setState({selected: e.target,
                    friendships: this.props.friendships.outgoing_friendships.map(friendship => {
                        if (friendship.mutual === true){
                        return this.props.users[friendship.friend_id]
                    }}).filter(friendship => friendship !== undefined)
                })
        } else if (e.target.id === 'pending') {
            this.setState({selected: e.target,
                friendships: this.props.friendships.outgoing_friendships.map(friendship => {
                    if (friendship.mutual === false){
                    return this.props.users[friendship.friend_id]
                }}).filter(friendship => friendship !== undefined)
            })
        } else if (e.target.id === 'online') {
            this.setState({selected: e.target,
                friendships: this.props.friendships.outgoing_friendships.map(friendship => {
                    if (friendship.mutual === true){
                    return this.props.users[friendship.friend_id]
                }

            }).filter(friendship => friendship !== undefined)
        })
        }  
    }

    render() {
        debugger
        let selectedFriends = <div id='wumpus'>
            <img id='wumpus-image' src={window.wumpus} alt="" />
            <span>
            Looks like there's nothing here. Here's a wumpus to keep you company!
            </span>
            </div>
        if (this.state !== null){
            if (this.state.friendships[0] !== undefined){
                selectedFriends = this.state.friendships.map(friend => ( <FriendIndexItemContainer friend={friend} /> ))
            } 
        }
        return(
            <div id='friends-index'>
                <div id='friends-index-top-bar'>
                    <div id='friend-index-image-word'>
                        <img id='friendImage' src={window.people} alt="" /> Friends
                    </div>
                    <div id='friend-index-options'>
                        <div className="friend-options" onClick={this.handleClick} id='online'>Online</div>
                        <div className="friend-options" onClick={this.handleClick} id='all'>All</div>
                        <div className="friend-options" onClick={this.handleClick} id='pending'>Pending</div>
                        <div className="friend-options"  id='blocked'>Blocked</div>
                    </div>
                </div>
                <div id='friends-list'>
                    <div id='friends-list-title'>{this.state === null ? 'Online' : `${this.state.selected.id.toUpperCase()} FRIENDS - ${this.state.friendships.filter(friendship => friendship !== undefined).length}`}</div>
                    {selectedFriends}
                </div>
            </div>
        )
    }
}


export default FriendsIndex