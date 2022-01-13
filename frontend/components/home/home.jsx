import React from "react";
import ServerIndexContainer from "./serverIndexContainer";
import ServerSplash from "./serverSplash";
import ServerChannels from "./serverChannels";
//import MessageList from "../messages/messageList";
import consumer from "../../../app/javascript/channels/consumer";


class Home extends React.Component {
    constructor(props) {
        super(props)
        
        
    }

    componentDidMount() {
        this.props.getServers()
        consumer.subscriptions.create("RoomChannel", {
            connected() {
              console.log('connected to room channel')
              // Called when the subscription is ready for use on the server
            },
          
            disconnected() {
              // Called when the subscription has been terminated by the server
              console.log('you have disconnected')
            },
          
            received(data) {
              // Called when there's incoming data on the websocket for this channel
            }
          })
    }
    

    render() {
        

        
          



        if (this.props.currentUser) {
        return (
            <div id='homeContainer'>
                
                <ServerIndexContainer servers={this.props.servers} />
                <ServerChannels />

            </div>
        )}
        else 
        return(
            <h1>You are logged out!</h1>
        )
    }
}

export default Home