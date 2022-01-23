import React from "react";
import ServerIndexContainer from "../home/serverIndexContainer";
import CategoryIndexContainer from "../category/categoryIndexContainer";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { ProtectedRoute, AuthRoute} from '../../util/route_util'
import selectedChannelPageContainer from "./selectedChannelPageContainer";
import consumer from "../../../app/javascript/channels/consumer";


class ServerShow extends React.Component {

    constructor(props) {
        super(props)
        this.channel = ''

    }

    componentDidMount() {  
        this.props.getServers()
        this.props.fetchServer(this.props.match.params[0])
        this.props.fetchCategories(this.props.match.params[0])        
        this.props.fetchUsers()
        
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
        const fetchCategories = this.props.fetchCategories
        const channel = consumer.subscriptions.create({channel: 'ServersChannel', id: this.props.server.id}, {
            connected() {
              // Called when the subscription is ready for use on the server'
              console.log(`connected to server`)
            },
          
            disconnected() {
              // Called when the subscription has been terminated by the server
            },
          
            received(data) {
              // Called when there's incoming data on the websocket for this channel
              
              fetchCategories(data.serverId)
            }
          });
          this.channel = channel
          
        }
    }


    render(){
        if (this.props.categories.length !== 0) {
            return (
                <div className="showPage">
                    <ServerIndexContainer servers={this.props.servers} server={this.props.server} />
                    <CategoryIndexContainer categories={this.props.categories} server={this.props.server}/>
                    <div>
                    </div>
                    <div id='middleComponent'>
                        <Switch>
                            <ProtectedRoute path='/*/*' component={selectedChannelPageContainer} />
                        </Switch>
                    </div>
                    <div id='rightComponent'>
                        <div>
                            hello World
                        </div>
                    </div> 
                </div>
            )}
        else {

            return (
                <div className="showPage">
                <ServerIndexContainer servers={this.props.servers} server={this.props.server} />
                <CategoryIndexContainer server={this.props.server}/>
                <div>
                </div>
                <div id='middleComponent'>
                    <Switch>
                        <ProtectedRoute path='/*/*' component={selectedChannelPageContainer} />
                    </Switch>
                    
                </div>
                <div id='rightComponent'>
                    <div>
                        hello World
                    </div>
                </div> 
            </div>
                
            ) 
        }
    }
}

export default ServerShow