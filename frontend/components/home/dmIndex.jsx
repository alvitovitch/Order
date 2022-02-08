import React from "react";



class DmIndex extends React.Component {

    constructor(props) {
        super(props)

    }

    handleClick(serverId) {
        const last = location.hash.split('/')[2]
        if (last !== undefined) {
            
            const lastButton = document.getElementById(`friendshipServer${last}`)
            lastButton.style.background = 'rgba(0, 0, 0, 0)'
            lastButton.style.color = 'grey'
        }
        const thisButton = document.getElementById(`friendshipServer${serverId}`)
        
        thisButton.style.background = 'rgb(59 62 69)';
        thisButton.style.color = 'white';
        location.hash = `#/@me/${serverId}`
    }


    render() {
        const dmServers = Object.values(this.props.servers).filter(server => server.server_type === 0)
        return (
            <div>
                <div id='directMessages'>
                    Direct Messages
                </div>
                {dmServers.map(server => (<div className='dmIndexItem' key={server.id} id={`friendshipServer${server.id}`} onClick={() => this.handleClick(server.id)} >
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