import React from "react";
import consumer from "../../../app/javascript/channels/consumer";
import MessageIndexContainer from "../messages/messageIndexContainer";


class SelectedDmPage extends React.Component {

    constructor(props) {
        super(props)
        this.channel = ''
        this.fetched = false
    }

    componentDidMount() {
        this.props.fetchCategories(this.props.server.id)
        this.props.fetchChannels(this.props.server.id, Object.values(this.props.categories)[0].id)

    }
    
    componentDidUpdate() {
        if (this.props.channels !== undefined) {
           
            if (this.channel !== '') {
                this.channel.unsubscribe()
            }
        const fetch = this.props.fetchMessages
        if (this.props.categories !== undefined )
        {
            if (Object.values(this.props.categories)[0].server_id !== this.props.server.id){
                this.props.fetchCategories(this.props.server.id)
            }
            if (this.props.channel !== undefined && this.props.channel.category_id !== Object.values(this.props.categories)[0].id){
                this.props.fetchChannels(this.props.server.id, Object.values(this.props.categories)[0].id)
            }
        }
        

        const channel = consumer.subscriptions.create({channel: 'MessagesChannel', id: this.props.channel.id}, {
            connected() {
              // Called when the subscription is ready for use on the server'
            },
          
            disconnected() {
              // Called when the subscription has been terminated by the server
            },
          
            received(data) {
              // Called when there's incoming data on the websocket for this channel
              
              fetch(data.messages[0], data.messages[1], data.messages[2])
            }
          });
          this.channel = channel
        }
        
    }
    
    render() {   
        //if (this.props.categories !== undefined && this.props.server.id === Object.values(this.props.categories)[0].server_id && this.props.channel.category_id !==  Object.values(this.props.categories)[0].id) {
            return(
                <div id='selectedServer'>
                    <div id='channelTitle'>
                        <div id='hash'>
                            @
                        </div>
                        <div>
                            {this.props.server.server_name.split(this.props.currentUser.username).filter(word => word.length >0)[0]}
                        </div>
                    </div>
                    <MessageIndexContainer channel={this.props.channel} serverId={this.props.server.id}/>
                    
                </div>
                
            )
        
        }
    }

export default SelectedDmPage