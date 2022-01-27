import React from "react";



class DmIndex extends React.Component {

    constructor(props) {
        super(props)

    }

    handleClick(serverId) {
        location.hash = `#/@me/${serverId}`
    }


    render() {
        const dmServers = Object.values(this.props.servers).filter(server => server.server_type === 0)
        return (
            <div>
                {dmServers.map(server => (<div id={server.id} onClick={() => this.handleClick(server.id)} >{server.server_name.split(this.props.currentUser.username).filter(word => word.length >0)[0]}</div>))}
            </div>
        )
    }
}

export default DmIndex