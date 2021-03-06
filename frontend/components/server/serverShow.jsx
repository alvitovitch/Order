import React from "react";
import ServerIndexContainer from "../home/serverIndexContainer";
import CategoryIndexContainer from "../category/categoryIndexContainer";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { ProtectedRoute, AuthRoute} from '../../util/route_util'
import SelectedChannelPageContainer from "./selectedChannelPageContainer";
import consumer from "../../../app/javascript/channels/consumer";
import UserInfoContainer from "../userInfo/userInfoContainer";
import JoinServerContainer from "./joinServerContainer";
import MemberRolesContainer from "./memberRolesContainer";

class ServerShow extends React.Component {

    constructor(props) {
        super(props)
        this.channel = ''
        this.server = 'hi'
    }

    componentDidMount() {  
        this.props.fetchUsers()
        this.props.getServers().then(
          () =>  this.props.fetchServer(this.props.match.params[0])
        )
        this.props.fetchCategories(this.props.match.params[0])        
        
    }

    componentDidUpdate() {
        if (this.props.server !== undefined) {
        if (this.props.channel !== undefined) {
            if (this.channel !== '') {
                this.channel.unsubscribe()
            }
        const fetchCategories = this.props.fetchCategories
        const channel = consumer.subscriptions.create({channel: 'ServersChannel', id: this.props.server.id}, {
            connected() {
              // Called when the subscription is ready for use on the server'
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
       
        if (this.server === 'hi' || this.server !== this.props.server.id) {
            
            this.server = this.props.server.id
            this.props.fetchServer(this.props.match.params[0])
        } }
    }


    render(){
        if (this.props.server !== undefined){
            if (this.props.users.length !== 0 && this.props.server.members !== undefined) {
                return (
                    <div className="showPage">
                        <div id='leftComponent'>
                            <ServerIndexContainer servers={this.props.servers} server={this.props.server} />
                            <div id='leftRightColumn'>
                                <CategoryIndexContainer categories={this.props.categories} server={this.props.server}/>
                                <UserInfoContainer currentUser={this.props.currentUser} /> 
                            </div>
    
                        </div>
                        <div id='middleComponent'>
                            <Switch>
                                <ProtectedRoute path='/*/*' component={SelectedChannelPageContainer} />
                                <>
                                    <div id='channelTitle'>
                                        <div id='hash'>
                                            #
                                        </div>
                                        <div>
                                        Welcome
                                        </div>
                                    </div>
                                        <JoinServerContainer server={this.props.server} />
    
                                </>
                            </Switch>
                        </div>
                        <div id='rightComponent'>
                            <div>
                                <div id='memberSearchBar'>
                                    {/* This will be a search bar */}
                                </div>
                                <MemberRolesContainer server={this.props.server} />
                            </div>
                      </div> 
                    </div>
                )}
                else {
                    return (
                        <div className="showPage">
                            <div id='leftComponent'>
                                <ServerIndexContainer servers={this.props.servers} server={this.props.server} />
                                <div id='leftRightColumn'>
                                    <CategoryIndexContainer categories={this.props.categories} server={this.props.server}/>
                                {this.props.currentUser ? <UserInfoContainer /> : null}    
                                </div>
        
                            </div>
                        <div id='middleComponent'>
                            <Switch>
                                <ProtectedRoute path='/*/*' component={SelectedChannelPageContainer} />
                            </Switch>
                            
                        </div>
                        <div id='rightComponent'>
                            {/* <div>
                                <div id='memberSearchBar'>
                                    This will be a search bar
                                </div>
                                
                            </div> */}
                        </div> 
                    </div>
                        
                    ) 
                }
            } else {
                return (
                    null
                )
            }
        }
}

export default ServerShow