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

    render() {
        return (
            <div id='loginFormConatiner'>
                <div id='loginHeader'>
                    <h1>Welcome back!</h1>
                    <span>We're so excited to see you again!</span>
                </div>
                {this.props.errors.map(error => <li>{error}</li>)}
                <form onSubmit={this.handleSubmit}>
                    <label>EMAIL OR PHONE NUMBER
                        <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')} />
                    </label>
                    <label>Password
                        <input type="password"
                        value={this.state.password} 
                        onChange={this.update('password')} />
                    </label>
                    {/* <Link>Forgot your password?</Link> */}
                    <button>Login</button>
                    <span>Need an account? <Link to='/signup'>Register</Link></span>
                </form>
            </div>
        )
    }
}

export default SessionForm