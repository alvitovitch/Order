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

    componentDidMount() {
        if (this.props.currentUser !== undefined){

            const fetchUser = this.props.fetchUser
            const fetchFriends = () => this.props.fetchFriendships(this.props.currentUser.id)
            const fetchServers = this.props.getServers
            consumer.subscriptions.unsubscribe
            consumer.subscriptions.create({channel: 'UsersChannel', id: this.props.currentUser.id}, {
                connected() {
                  // Called when the subscription is ready for use on the server'
                },
              
                disconnected() {
                  // Called when the subscription has been terminated by the server
                },
              
                received(data) {
                  // Called when there's incoming data on the websocket for this channel
                    if (data.type === 'fetchUser'){
                        fetchUser(data.user_id)
                    } else if (data.type === 'friendship'){
                        fetchFriends()
                    } else if (data.type === 'servers'){
                        fetchServers()
                    } else {
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
                    <img src={window.order} id='homeButton' onClick={() => this.goHome()}></img>
                    <div id='seperator'></div>
                    {this.props.servers.filter(server => server.server_type === 1 && (server.members !== undefined && Object.values(server.members).filter(member => member.id === this.props.currentUser.id).length > 0)).map(server => ( <ServerIndexItem key={server.id} server={server}/>))}
                </ul>
                <button id='createNewServerButton' onClick={this.show}>+</button>
                <div id='createServerBackground' onClick={e => this.hideBackground(e)}>
                        <div id='createServer'>
                            <form id='createServerForm' onSubmit={this.createServer}>
                                <div id='createServerTitle'>
                                Create Server
                                </div>
                                <div>
                                    <div id='serverName'>SERVER NAME
                                    </div>
                                        <input className='inputBox' type="text" value={this.state.name} 
                                        onChange= {this.update('name')}/>
                                </div>
                                    <div id='createServerButtonDiv'>
                                        <button id='createServerButton'>Create Server</button>
                                    </div>
                                  
                            </form>
                        </div>
                </div>

            </div>
        )
    }

}


export default ServerIndex