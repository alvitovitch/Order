import React from "react";
import ServerIndexContainer from "./serverIndexContainer";
import ServerSplash from "./serverSplash";
import ServerChannels from "./serverChannels";
//import MessageList from "../messages/messageList";
import consumer from "../../../app/javascript/channels/consumer";
import CategoryIndexContainer from "../category/categoryIndexContainer";


class Home extends React.Component {
    constructor(props) {
        super(props)
        
        
    }

    componentDidMount() {
        this.props.getServers()

    }
    

    render() {
        

        
          



        if (this.props.currentUser) {
        return (
            <div id='homeContainer'>
                <ServerIndexContainer servers={this.props.servers} />
                <ServerChannels />
                <div id='rightComponentTwo'>
                    everything else
                </div>
            </div>
        )}
        else 
        return(
            <h1>You are logged out!</h1>
        )
    }
}

export default Home