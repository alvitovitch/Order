import React from "react";
import { Link } from 'react-router-dom'

class SignupFormContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            month: '',
            day: '',
            year: '',
            over13: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.oldEnough = this.oldEnough.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (!this.oldEnough()) {
            debugger
            this.setState({over13: false})
        } else {
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
        }
    }

    oldEnough() {
        let birthdate = new Date(`${this.state.month} ${this.state.day}, ${this.state.year}`)
        birthdate.setFullYear(birthdate.getFullYear() + 13)
        const currentDate = new Date()
        return currentDate > birthdate
    }
    componentDidMount() {
        this.props.removeSessionErrors()
    }


    render() {
        const daysOfMonth = {
            'January': 31,
            'Febuary': 28,
            'March': 31,
            'April': 30,
            'May': 31,
            'June': 30,
            'July': 31,
            'August': 31,
            'September': 30,
            'November': 30,
            'December': 31
        }
        const monthDays = () => {
            const days = []
            for (let i = 1; i<= daysOfMonth[this.state.month]; i++) {
                days.push(i)
            }
            return days
        }

        const years = () => {
            const allYears = []
            for (let i = 1900; i <= 2022; i++) {
                allYears.push(i)
            }
            return allYears
        }

        if (this.state.over13 === false) {
            return (
                <div id='signupBackground'>
                <img id='clouds' src={window.cloud} alt="clouds" />
                    <div id='SignupFormContainer'>
                        <h1 id='unableHeader'>Unable to register</h1>
                        <p>You need to be 13 or older in order to user Order.</p>
                        <button id='signupButton' onClick={ () => this.props.history.push('/login')}>Back to Login</button>
                    </div>
                </div>
            )
        }
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
                        <label className='signupLabel'>PASSWORD
                            <input type="password"
                            value={this.state.password} 
                            onChange={this.update('password')} />
                        </label>
                            <label className='signupLabel'>DATE OF BIRTH
                        <div id='birthdateSelectors'>
                                <select id='selectMonth' onChange={this.update('month')} value={this.state.month}>
                                    <option value="none" hidden selected>Select</option>
                                    <option value="January" id='January'>January</option>
                                    <option value="Febuary" id='Feburary'>Febuary</option>
                                    <option value="March" id='March'>March</option>
                                    <option value="April" id='April'>April</option>
                                    <option value="May" id='May'>May</option>
                                    <option value="June" id='June'>June</option>
                                    <option value="July" id='July'>July</option>
                                    <option value="August" id='August'>August</option>
                                    <option value="September" id='September'>September</option>
                                    <option value="October" id='October'>October</option>
                                    <option value="November" id='November'>November</option>
                                    <option value="December" id='December'>December</option>
                                </select>
                                <select id="selectDay" onChange={this.update('day')} value={this.state.day}>
                                    <option value="none" hidden selected>Select</option>
                                    {monthDays().map(day => (<option value={day} id={day}>{day}</option>))}
                                </select>
                                <select id="year" onChange={this.update('year')} value={this.state.year}>
                                    <option value="none" hidden selected>Select</option>
                                    {years().map(year => (<option value={year} id={year}>{year}</option>))}
                                </select>
                        </div>
                            </label>
                        <button id='signupButton'>Sign Up</button>
                        <Link to='/login'>Already have an account? </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupFormContainer