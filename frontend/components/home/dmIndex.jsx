import React from "react";



class DmIndex extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        const dmServers = Object.values(this.props.servers).filter(server => server.server_type === 0)
        return (
            <div>
                {dmServers.map(server => (<div>{server.name}</div>))}
            </div>
        )
    }
}

export default DmIndex