import React from "react";
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
        

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    demoLogin(e) {
        e.preventDefault()
        const user = {username: 'DemoBro', password: 'veryFake'}
        this.props.processForm(user)
    }

    render() {
        return (
            <div id='loginBackground'>
                <img id='clouds' src={window.cloud} alt="clouds" />
                <div id='loginFormContainer'>
                    <div id='loginHeader'>
                        <h1>Welcome back!</h1>
                        <span>We're so excited to see you again!</span>
                    </div>
                    <div id='loginErrors'>
                        {this.props.errors.map(error => <li>{error}</li>)}
                    </div>
                    <form id='loginForm' onSubmit={this.handleSubmit}>
                        <label id="emailLabel">EMAIL OR PHONE NUMBER
                            <input id='usernameInput' type="text"
                            value={this.state.username}
                            onChange={this.update('username')} />
                        </label>
                        <label id='passwordLabel'>PASSWORD
                            <input id="passwordInput" type="password"
                            value={this.state.password} 
                            onChange={this.update('password')} />
                        </label>
                        {/* <Link>Forgot your password?</Link> */}
                        <div id='buttonDiv'>
                            <button className="loginButton">Login</button>
                            <button className="loginButton" onClick={this.demoLogin}>Demo User</button>
                        </div>
                        <span id='needAccount'>Need an account? <Link to='/signup'>Register</Link></span>
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm