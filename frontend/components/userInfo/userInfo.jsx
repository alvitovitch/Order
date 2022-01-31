import React from "react";
import SettingsModalContainer from "../userSettings/settingsModalContainer";



class UserInfo extends React.Component {

    handleClick() {
        document.getElementById('settings-container').style.display = 'flex'
    }

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
                <img onClick={this.handleClick} id='gear' src={window.gear} alt="" />
                 <SettingsModalContainer/>
            </div>
        )
    }

}


export default UserInfo

