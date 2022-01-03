import React from "react";
import { Link } from 'react-router-dom'

class SignupFormContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
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
                <span>{this.props.errors}</span>
                <div id='loginHeader'>
                    <h1>Create an account</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>EMAIL
                        <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')} />
                    </label>
                    <label>USERNAME
                        <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')} />
                    </label>
                    <label>Password
                        <input type="password"
                        value={this.state.password} 
                        onChange={this.update('password')} />
                    </label>
                    {/* <label>DATE OF BIRTH
                        <input type="date"
                        value={this.state.password} 
                        onChange={this.update('password')} />
                    </label> */}
                    {/* <Link>Forgot your password?</Link> */}
                    <button>Sign Up</button>
                    <Link to='/login'>Already have an account? </Link>
                </form>
            </div>
        )
    }
}

export default SignupFormContainer