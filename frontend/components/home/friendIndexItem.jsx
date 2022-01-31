import React from "react";

class FriendIndexItem extends React.Component {

    constructor(props){
        super(props)
        debugger
    }


    render() {
        if (Object.values(this.props.servers).filter(server => server.server_type === 0 && server.server_name.includes(this.props.friend.username))[0] !== undefined){
            return (
                <div onClick={() => location.hash = `/@me/${Object.values(this.props.servers).filter(server => server.server_type === 0 && server.server_name.includes(this.props.friend.username))[0].id}`} className="friend-index-item">
                        <img className='userAvatar' src={window.userAvatar} alt="" />
                    <div className="friend-username">
                        {`${this.props.friend.username}`}
                    <div className="friend-tag">
                        {`${this.props.friend.tag}`}
                    </div>
                    </div>
                </div>
            )
        } else if (this.props.friend !== undefined) {
            return (
                <div className="friend-index-item">
                    <img className='userAvatar' src={window.userAvatar} alt="" />
                    <div className="friend-username">
                        {`${this.props.friend.username}`}
                    <div className="friend-tag">
                        {`${this.props.friend.tag}`}
                    </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div>loading</div>
            )
        }
    }
}

export default FriendIndexItem