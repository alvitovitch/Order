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
            <div id='signupBackground'>
                <img id='clouds' src={window.cloud} alt="clouds" />
                <div id='SignupFormContainer'>
                    <div id='loginHeader'>
                        <h1>Create an account</h1>
                    </div>
                    <div id='loginErrors'>
                        {this.props.errors.map(error => <li>{error}</li>)}                    </div>
                    <form id='signupForm' onSubmit={this.handleSubmit}>
                        <label className='signupLabel'>EMAIL
                            <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                        </label>
                        <label className='signupLabel'>USERNAME
                            <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')} />
                        </label>
                        <label className='signupLabel'>Password
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
                        <button id='signupButton'>Sign Up</button>
                        <Link to='/login'>Already have an account? </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupFormContainer