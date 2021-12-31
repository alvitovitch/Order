import React from "react";
import { Link } from 'react-router-dom'

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <div>
                            Order
                        </div>
                        <div>
                            <ul>
                                <li>Download</li>
                                <li>Nitro</li>
                                <li>Safety</li>
                                <li>Support</li>
                                <li>Blog</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div>
                            Login
                        </div>
                    </ul>
                </div>
                <div>
                    <div>
                        <h1>IMAGINE A PLACE...</h1>
                        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                    </div>
                    <button>Download for Windows</button>
                    <button>Open Order in your browser</button>
                </div>
            </div>
        )
    }
}

export default Splash