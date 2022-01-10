import React from "react";
import ServerIndexItem from "./serverIndexItem";

//presentational component
class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
        this.goHome = this.goHome.bind(this)
    }
    
    goHome() {
        location.hash = '#/@me'
    }
    
    render() {
        return(
            <div id='serverIndex'>
                <button className="serverButton" id='homeButton' onClick={() => this.goHome()}></button>
                <ul>
                    {this.props.servers.map(server => ( <ServerIndexItem server={server}/>))}
                </ul>
            </div>
        )
    }

}


export default ServerIndex