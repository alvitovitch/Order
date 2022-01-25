import React from "react";



class UserInfo extends React.Component {


    render() {
        return (
            <div id='userInfoContainer'>
                <img className='userAvatar' src={window.userAvatar} alt="userAvatar" />
                <div id='usernameTag'>
                    <div id="username">
                        {this.props.currentUser.username}
                    </div>
                    <div id='tag'>
                        {this.props.currentUser.tag}
                    </div>
                </div>
            </div>
        )
    }

}


export default UserInfo

