import React from "react";

class SettingsModal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            id: this.props.currentUser.id,
            username: this.props.currentUser.username,
            email: this.props.currentUser.email,
            phone_number: this.props.currentUser.phone_number,
            

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    closeSettings(){
        document.getElementById('settings-container').style.display = 'none'

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.updateUser({user: user})
    }

    close(e){
        debugger
        const bkg = document.getElementById('username-form-container')
        if (e.target === bkg){
            bkg.style.display = 'none'
        }
    }

    openUsername(){
        document.getElementById('username-form-container').style.display = 'flex'
    }


    render(){
        return(
            <div id='settings-container'>
                <div id='settings-left'>
                    <div id='buttonContainer'>
                        <button id='logout' onClick={() => this.props.logout()}>Log Out</button>
                    </div>
                </div>
                <div id='settings-right'>
                        <div id='user-info-top'>
                            <h2>My Account</h2>
                            <button id="leave-settings" onClick={this.closeSettings}>X</button>
                        </div>
                    <div id='settings-user-info'>
                        <div id='user-info-box'>
                            <div id='user-info-box-top'>
                                <div id='user-info-pic-name'>
                                    <img id='settings-avatar' src={window.userAvatar} alt="" />
                                    <h2 id='username-info'>{`${this.props.currentUser.username}`}</h2>
                                    <h2 id='tag-info'>{`${this.props.currentUser.tag}`}</h2>
                                </div>
                                <button id='edit-user-button'>
                                    Edit User Profile
                                </button>
                            </div>
                            <div id='info-fields'>
                                <div id='field-username'>
                                    <div>
                                            <h3>USERNAME</h3>
                                        <div id='username-info-2'>
                                            <h2>{this.props.currentUser.username}</h2>
                                            <h2>{this.props.currentUser.tag}</h2>
                                        </div>
                                    </div>
                                    <button onClick={this.openUsername} className="edit-button">Edit</button>
                                </div>
                                <div id='field-email'>
                                    <div>
                                            <h3>EMAIL</h3>
                                        <div>
                                            <h2>{this.props.currentUser.email}</h2>
                                        </div>
                                    </div>
                                    <button className="edit-button" >Edit</button>
                                </div>
                                <div id='field-phone'>
                                    <div>
                                            <h3>PHONE NUMBER</h3>
                                        <div>
                                            <h2>{this.props.currentUser.phone_number === null ? 'Feel free to add your phone number' : this.props.currentUser.phone_number }</h2>
                                        </div>
                                    </div>
                                    <button className="edit-button" >Edit</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={this.close} id='username-form-container'>
                <form id='username-form' onSubmit={this.handleSubmit}>
                    Change your username
                    <label>
                        USERNAME
                        <input onChange={this.update('username')} id='username-input' value={this.state.username} type="text"/>
                    </label>
                    <button id="edit-user-button">Done</button>
                </form>
            </div>
        </div>
        )
    }
}



export default SettingsModal