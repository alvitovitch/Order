import React from "react";
import { ServerShowContainer } from './serverShowContainer'
import consumer from "../../../app/javascript/channels/consumer";
import MessageIndexContainer from "../messages/messageIndexContainer";


class SelectedChannelPage extends React.Component {

    constructor(props) {
        super(props)
        this.channel = ''
        this.fetched = false
    }

    
    componentDidUpdate() {
        if (this.props.channel !== undefined) {
            // if (this.props.messages === undefined ||
            //      (Object.values(this.props.messages).length === 0 && this.fetched === false) ||
            //      Object.values(this.props.messages)[0].channel_id !== this.props.channel.id 
            //      ) {
            //     this.feteched = true
            //     
            // }
            if (this.channel !== '') {
                this.channel.unsubscribe()
            }
        const fetch = this.props.fetchMessages
        const channel = consumer.subscriptions.create({channel: 'MessagesChannel', id: this.props.channel.id}, {
            connected() {
              // Called when the subscription is ready for use on the server'
            },
          
            disconnected() {
              // Called when the subscription has been terminated by the server
            },
          
            received(data) {
              // Called when there's incoming data on the websocket for this channel
              debugger
              fetch(data[0], data[1], data[3])
            }
          });
          this.channel = channel
          
        }
    }

    render() {
        if (this.props.channel !== undefined) {
            
        return(
            <div>
                {this.props.channel.name}
                <MessageIndexContainer channel={this.props.channel} serverId={this.props.match.params[0]}/>
            </div>
        )
        }
        else {
            return(
                <div>
                    loading
                </div>
            )
        }
    }
}

export default SelectedChannelPage