import React from "react";

class ServerIndexItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        
        return(
            <div>
                <button>{this.props.server.server_name}</button>
            </div>
        )
    }
}

export default ServerIndexItem