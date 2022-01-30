import React from "react";

class FriendIndexItem extends React.Component {

    constructor(props){
        super(props)
        this.server = Object.values(props.servers).filter(server => server.server_type === 0 && server.server_name.includes(props.friend.username))[0]
        debugger
    }

    render() {
        debugger
        return (
            <div onClick={() => location.hash = `/@me/${this.server.id}`} className="friend-index-item">
                    <img className='userAvatar' src={window.userAvatar} alt="" />
                <div className="friend-username">
                    {`${this.props.friend.username}${this.props.friend.tag}`}
                </div>
            </div>
        )
    }
}

export default FriendIndexItem