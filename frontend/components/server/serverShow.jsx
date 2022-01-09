import React from "react";


class ServerShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            server: this.props.server
        }

    }

    componentDidMount() {
        this.props.fetchServer()
    }

    render(){
        
        if (this.state.server !== undefined) {
            return (
                <div>
                    {this.state.server.server_name }
                    <div>
                        <div>
                            channels go here
                        </div>
                    </div>
                </div>
            )}
        else {
            return null 
        }
    }
}

export default ServerShow