import React from "react";
import { ServerShowContainer } from './serverShowContainer'
import consumer from "../../../app/javascript/channels/consumer";

class SelectedChannelPage extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        if (this.props.channel !== undefined) {
            debugger
        consumer.subscriptions.create({channel: 'MessagesChannel', id: this.props.channel.id}, {
            connected() {
              // Called when the subscription is ready for use on the server'
              console.log('hiii')
            },
          
            disconnected() {
              // Called when the subscription has been terminated by the server
            },
          
            received(data) {
              // Called when there's incoming data on the websocket for this channel
            }
          });
        }
    }

    render() {
        if (this.props.channel !== undefined) {
        return(
            <div>
                {this.props.channel.name}
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