import React from "react";
import ServerIndexItem from "./serverIndexItem";

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
                    <button className="serverButton" id='homeButton' onClick={() => this.goHome()}></button>
                    <div id='seperator'></div>
                    {this.props.servers.map(server => ( <ServerIndexItem server={server}/>))}
                </ul>
                <button onClick={this.show}>+</button>
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