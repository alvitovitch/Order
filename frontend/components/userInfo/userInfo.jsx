import React from "react";



class UserInfo extends React.Component {


    render() {
        return (
            <div id='userInfoContainer'>
                <div id='leftInfoContainer'>
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
                <img id='gear' src={window.gear} alt="" />
            </div>
        )
    }

}


export default UserInfo

