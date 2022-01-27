import React from "react";


class JoinServer extends React.Component {
    constructor(props) {
        super(props)

    }

    handleMembership() {
        

    }


    render() {

        return(
            <div id='joinServerBox'>
                <div id='top text'>
                    Well hey there! Welcome to {this.props.server.name}! If this is your first time here press the button to join the server to see the channels and join in on the fun!
                </div>
                <button onClick={this.handleMembership} id='joinServerButton'>
                    Join {this.props.server.name}
                </button>
            </div>
        )
    }
}

export default JoinServer