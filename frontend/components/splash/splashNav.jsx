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
                    <li>
                        <a className="links" href="https://www.linkedin.com/in/alvitovitch/">
                            LinkedIn
                        </a> 
                    </li>
                    <li>
                        <a className="links" href="https://github.com/alvitovitch">
                            Github
                        </a>
                    </li>
                    <li>
                        <a className="links" href="https://www.instagram.com/brooklyn_dandy/">
                            Instagram
                        </a>
                    </li>
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