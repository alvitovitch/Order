import React from "react";
import ServerIndexItem from "./serverIndexItem";
import consumer from "../../../app/javascript/channels/consumer";

//presentational component
class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.goHome = this.goHome.bind(this)
        this.createServer = this.createServer.bind(this)
    }

    // Since the server index is always displayed on the screen when it is rendered it subscribes the current
    // user to their own channel
    // Whenever a user is added to a server all members of that server fetch the user

    componentDidUpdate() {
        if (this.props.currentUser !== undefined){

            const fetchUser = this.props.fetchUser
            consumer.subscriptions.create({channel: 'UsersChannel', id: this.props.currentUser.id}, {
                connected() {
                  // Called when the subscription is ready for use on the server'
                },
              
                disconnected() {
                  // Called when the subscription has been terminated by the server
                },
              
                received(data) {
                  // Called when there's incoming data on the websocket for this channel
                  switch (data.type) {
                      case 'fetchUser':
                        fetchUser(data.userId)
                      default:
                          console.log('Not sure what that was @serverIndex')
                  }
                }
              });
        }
    }
    
    goHome() {
        location.hash = '#/@me'

    }

    update(field) {
        return e=> this.setState({[field]: e.currentTarget.value})
    
    }

    show() {
        const ele = document.getElementById('createServerBackground')
        ele.style.visibility = 'visible' 
    }

    hideBackground(e) {
        const bkg = document.getElementById('createServerBackground')
        if (e.target === bkg){
            bkg.style.visibility = 'hidden'
        }
    }
    createServer() {
        this.props.createServer({server: {server_name: this.state.name, server_type: 1}})
        this.setState({name: ''})
        document.getElementById('createServerBackground').style.visibility = 'hidden'
    }
    render() {
           
        return(
            <div id='serverIndex'>
                <ul>
                    <button  id='homeButton' onClick={() => this.goHome()}></button>
                    <div id='seperator'></div>
                    {this.props.servers.filter(server => server.server_type === 1).map(server => ( <ServerIndexItem key={server.id} server={server}/>))}
                </ul>
                <button id='createNewServerButton' onClick={this.show}>+</button>
                <div id='createServerBackground' onClick={e => this.hideBackground(e)}>
                        <div id='createServer' >
                            <form onSubmit={this.createServer}>Create Server
                                <label>Server Name
                                    <input type="text" value={this.state.name} 
                                    onChange= {this.update('name')}/>
                                </label>  
                                    <button>Create Server</button>
                            </form>
                        </div>
                </div>

            </div>
        )
    }

}


export default ServerIndex