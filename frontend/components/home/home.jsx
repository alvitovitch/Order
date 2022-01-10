import React from "react";
import ServerIndexContainer from "./serverIndexContainer";
import ServerSplash from "./serverSplash";
import ServerChannels from "./serverChannels";


class Home extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            servers: props.servers
        }
        
    }

    componentDidMount() {
        this.props.getServers()
    }
    

    render() {
        if (this.props.currentUser) {
        return (
            <div id='homeContainer'>
                <ServerIndexContainer servers={this.state.servers} />
                <ul>
                </ul>
                <ServerChannels />
                <ServerSplash />
                <button onClick={this.props.logout}>click me to log out!</button>
                this is home!
            </div>
        )}
        else 
        return(
            <h1>You are logged out!</h1>
        )
    }
}

export default Home