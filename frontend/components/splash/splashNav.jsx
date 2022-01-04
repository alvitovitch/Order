import React from "react";
import {Link} from 'react-router-dom'


class SplashNav extends React.Component {

    render() {
        let buttonType = 'Open Order'
        return(
        <div id='splashNav'>
            <div id='logo'>
                Order
            </div>
            <div id='splashNavLinks'>
                <ul>
                    <li className="nonWorkingButton">LinkedIn</li>
                    <li className="nonWorkingButton">Github</li>
                    <li className="nonWorkingButton">Instagram</li>
                </ul>
            </div>
            <a id='loginHref'href="/#/login">
                <button id='loginButton'>{buttonType}</button>     
            </a>
        </div>
        )
    }
}

export default SplashNav