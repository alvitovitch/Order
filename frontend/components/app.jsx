import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ProtectedRoute, AuthRoute} from '../util/route_util'
import HomeContainer from './home/homeContainer'
import Login from './login/login'
import LoginFormContainer from './login/loginFormContainer'
import SessionForm from './login/sessionForm'
import SignupFormContainer from './login/signupFormContainer'
import Splash from './splash/splash'

const App = ({ children }) => (
    <div>
        <Switch>
            <Route exact path='/' component={Splash} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <ProtectedRoute path='/@me' component={HomeContainer} />
        </Switch>
    </div>
)

export default App