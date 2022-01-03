import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthRoute from '../util/route_util'
import Login from './login/login'
import SessionForm from './login/sessionForm'
import SignupFormContainer from './login/signupFormContainer'
import Splash from './splash/splash'

const App = ({ children }) => (
    <div>
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignupFormContainer} />
        </Switch>
    </div>
)

export default App