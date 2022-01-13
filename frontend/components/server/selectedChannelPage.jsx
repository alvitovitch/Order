import React from "react";
import { ServerShowContainer } from './serverShowContainer'
import consumer from "../../../app/javascript/channels/consumer";


class SelectedChannelPage extends React.Component {

    constructor(props) {
        super(props)
        this.channel = ''
    }

    componentDidUpdate() {
        debugger
        if (this.props.channel !== undefined) {
            if (this.channel !== '') {
                this.channel.unsubscribe()
            }
        const channel = consumer.subscriptions.create({channel: 'MessagesChannel', id: this.props.channel.id}, {
            connected() {
              // Called when the subscription is ready for use on the server'
              console.log('hiii')
            },
          
            disconnected() {
              // Called when the subscription has been terminated by the server
            },
          
            received(data) {
              // Called when there's incoming data on the websocket for this channel
              console.log(data)
            }
          });
          this.channel = channel
          debugger
          this.channel.received({content: 'testing'})
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