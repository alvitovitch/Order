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
                {dmServers.map(server => (<div className='dmIndexItem' id={`friendshipServer${server.id}`} onClick={() => this.handleClick(server.id)} >
                    <img className='dmIndexItemAvatar' src={window.userAvatar} alt="" />
                    <div className="dmIndexItemName">
                        {server.server_name.split(this.props.currentUser.username).filter(word => word.length >0)[0]}
                    </div>
                    </div>))}
            </div>
        )
    }
}

export default DmIndex