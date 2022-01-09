import React from "react";

class ServerIndexItem extends React.Component {

    constructor(props) {
        super(props)
    }

    makeActive() {

    }

    render() {
        
        return(
            <div>
                <a href={`/#/${this.props.server.id}`}>
                    <button id={`server${this.props.server.id}ShowButton`} >{this.props.server.server_name}</button>
                </a>
            </div>
        )
    }
}

export default ServerIndexItem