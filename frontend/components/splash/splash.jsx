import React from "react";
import { Link } from 'react-router-dom'
import SplashNav from "./splashNav";

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    < SplashNav />
                </div>
                <div>
                    <div>
                        <h1>IMAGINE A PLACE...</h1>
                        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. 
                            Where just you and a handful of friends can spend time together. A place that makes it 
                            easy to talk every day and hang out more often.</p>
                    </div>
                    <button>Download for Windows</button>
                    <button>Open Order in your browser</button>
                </div>
            </div>
        )
    }
}

export default Splash