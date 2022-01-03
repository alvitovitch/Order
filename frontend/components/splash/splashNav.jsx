import React from "react";
import {Link} from 'react-router-dom'


class SplashNav extends React.Component {

    render() {
        return(
        <div id='splashNav'>
            <div id='logo'>
                Order
            </div>
            <div id='splashNavLinks'>
                <ul>
                    <li>Download</li>
                    <li>Nitro</li>
                    <li>Safety</li>
                    <li>Support</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
            <Link to="/login">
                Login
            </Link>
        </div>
        )
    }
}

export default SplashNav