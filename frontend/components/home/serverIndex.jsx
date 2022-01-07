import React from "react";
import ServerIndexItem from "./serverIndexItem";

//presentational component
class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    render() {
        return(
            <div id='serverIndex'>
                <ul>
                    {this.props.servers.map(server => ( <ServerIndexItem server={server}/>))}
                </ul>
                <button className="serverButton" id='homeButton' onClick={() => this.props.history.push('/')}></button>
            </div>
        )
    }

}


export default ServerIndex