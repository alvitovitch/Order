import React from "react";

class FriendIndexItem extends React.Component {


    render() {
        return (
            <div className="friend-index-item">
                    <img className='userAvatar' src={window.userAvatar} alt="" />
                <div className="friend-username">
                    {`${this.props.friend.username}#${this.props.friend.tag}`}
                </div>
            </div>
        )
    }
}

export default FriendIndexItem