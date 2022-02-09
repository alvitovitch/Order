import React from "react";
import { Link } from 'react-router-dom'
import SplashNav from "./splashNav";


class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div id='splashMain'>
                <div id='sectionOne'>
                    <div>
                        < SplashNav />
                    </div>
                    <div id="splashText">
                            <h1>IMAGINE A PLACE...</h1>
                            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. 
                                Where just you and a handful of friends can spend time together. A place that makes it 
                                easy to talk every day and hang out more often.</p>
                        <div id='splashButtonDiv'>
                            <button id='downloadButton'>Download for Windows</button>
                            <a href="/#/@me">
                                <button id='openOrder'>Open Order in your browser</button>
                            </a>
                        </div>
                    </div>
                    <div id='imageDiv'>
                        <img id='barPeople' src={window.barPeople} alt="barPeople" />
                        <img id='shoePeople' src={window.shoePeople} alt="shoePeople" />
                        <img id='splashClouds' src={window.cloud} alt="clouds" />
                    </div>
                </div>
                <div id = 'sectionTwo'>
                        <img src={window.chill} alt="" />
                        <div>
                            <h1>Create an invite-only place where you belong</h1>
                            <p>servers are organized into topic-based channels where you can collaborate,
                                 share, and just talk about your day without clogging up a group chat.</p>
                        </div>
                </div> 
                <div id='sectionThree'>
                    <h1>ORDER</h1>
                    <div id='splashNavLinks'>
                <ul>
                    <li>
                        <a className="links" target='_blank' href="https://www.linkedin.com/in/alvitovitch/">
                            LinkedIn
                        </a> 
                    </li>
                    <li>
                        <a className="links" target='_blank' href="https://github.com/alvitovitch">
                            Github
                        </a>
                    </li>
                    <li>
                        <a className="links" target='_blank' href="https://www.instagram.com/brooklyn_dandy/">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
                </div> 
            </div>
        )
    }
}

export default Splash