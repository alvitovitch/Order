import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import { AuthRoute } from '../util/route_util'
import Login from './login/login'
import SessionForm from './login/sessionForm'
import SignupFormContainer from './login/signupFormContainer'
import Splash from './splash/splash'

const App = ({ children }) => (
    <div>
        <Routes>
            <Route exact path='/' element={<Splash/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignupFormContainer/>} />
        </Routes>
    </div>
)

export default App