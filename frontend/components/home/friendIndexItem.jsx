import React from "react";

class FriendIndexItem extends React.Component {

    constructor(props){
        super(props)
        this.createFriendship = this.createFriendship.bind(this)
        this.deleteFriendship = this.deleteFriendship.bind(this)
    }

    click(e) {
        if (e.target.className !== 'delete-friendship' ){
            location.hash = `/@me/${Object.values(this.props.servers).filter(server => server.server_type === 0 && server.server_name.includes(this.props.friend.username))[0].id}`
        }
    }

    deleteFriendship() {
        this.props.deleteFriendship(this.props.currentUser.Id, this.props.friendship.id)
        document.getElementById(`friend-index-item${this.props.friendship.id}`).style.display = 'none'
    }

    createFriendship() {
        this.props.createFriendship(this.props.currentUser.id, {friendship: {user_id: this.props.currentUser.id, friend_id: this.props.friend.id}})
        document.getElementById(`friend-index-item${this.props.friendship.id}`).style.display = 'none'
    }

    render() {
        if (Object.values(this.props.servers).filter(server => server.server_type === 0 && server.server_name.includes(this.props.friend.username))[0] !== undefined){
            return (
                <div onClick={e => this.click(e) } className="friend-index-item" id={`friend-index-item${this.props.friendship.id}`}>
                    <div className="friend-name-tag">
                        <img className='userAvatar' src={window.userAvatar} alt="" />
                        <div className="friend-username">
                            {`${this.props.friend.username}`}
                            <div className="friend-tag">
                                {`${this.props.friend.tag}`}
                            </div>
                        </div>
                    </div>
                    <div className="friend-buttons">
                        {this.props.friendship.mutual !== true ? <button onClick={this.createFriendship} className='accept-friend'></button> : null}
                        <button onClick={this.deleteFriendship} className="delete-friendship">X</button> 
                    </div>
                </div>
            )
        } else if (this.props.friend !== undefined) {
            return (
                <div className="friend-index-item">
                    <div className="friend-name-tag">
                        <img className='userAvatar' src={window.userAvatar} alt="" />
                        <div className="friend-username">
                            {`${this.props.friend.username}`}
                        <div className="friend-tag">
                            {`${this.props.friend.tag}`}
                        </div>
                        </div>
                    </div>
                        
                       {this.props.friendship.user_id === this.props.currentUser.id ? 
                            <div className="friend-buttons">                                
                                <button onClick={this.deleteFriendship} className="delete-friendship">X</button>
                           </div>
                           : 
                           <div className="friend-buttons">
                                <button onClick={this.createFriendship} className='accept-friend'></button>
                                <button onClick={this.deleteFriendship} className="delete-friendship">X</button> 
                            </div>}
                </div>
            )
        } else {
            return(
                null
            )
        }
    }
}

export default FriendIndexItem