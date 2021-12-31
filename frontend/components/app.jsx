import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Splash from './splash/splash'


const App = ({ children }) => (
    <div>
        <Routes>
            <Route exact path='/' element={<Splash/>} />
        </Routes>
    </div>
)

export default App