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
                            <button id='openButton'>Open Order in your browser</button>
                        </div>
                    </div>
                    <div id='imageDiv'>
                        <img id='barPeople' src={window.barPeople} alt="barPeople" />
                        <img id='shoePeople' src={window.shoePeople} alt="shoePeople" />
                        <img id='splashClouds' src={window.cloud} alt="clouds" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash