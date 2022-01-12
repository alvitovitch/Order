import React from "react";

class ServerIndexItem extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        location.hash = `#/${this.props.server.id}`
        document.getElementById(`server${this.props.server.id}ShowButton`) 
    }

    render() {
        return(
            <div>
                <a href={`/#/${this.props.server.id}`}>
                    <button onClick={this.handleClick} className='serverButton' id={`server${this.props.server.id}ShowButton`} >{this.props.server.server_name}</button>
                </a>
            </div>
        )
    }
}

export default ServerIndexItem