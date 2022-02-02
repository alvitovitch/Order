import React from "react";


class JoinServer extends React.Component {
    constructor(props) {
        super(props)
        this.handleMembership = this.handleMembership.bind(this)
    }

    componentDidMount() {
        this.props.fetchMemberships(this.props.server.id)
    }

    handleMembership() {
        const membership = { membership:{
            server_id: this.props.server.id,
            user_id: this.props.currentUser.id,
            role_id: Object.values(this.props.server.roles).filter(role => role.name === 'Member')[0].id
        }
        
        } 
        if (!Object.values(this.props.memberships).includes(this.props.currentUser)) {
            
            this.props.createMembership(this.props.server.id, membership)
        }

    }


    render() {

        return(
        <div id='join-server'>
            <div id='joinServerBox'>
                <img src={window.wumpus} alt="" />
                <div id='top-text'>
                    Well hey there! Welcome to {this.props.server.server_name}! If this is your first time here press the button to join the server to see the channels and join in on the fun!
                </div>
                <button onClick={this.handleMembership} id='joinServerButton'>
                   { !Object.values(this.props.memberships).filter(membership => membership.user_id === this.props.currentUser.id).length > 0 ? <span>
                       Join {this.props.server.server_name} 
                   </span> : <span>Joined</span> }
                </button>
            </div>
        </div>
        )
    }
}

export default JoinServer