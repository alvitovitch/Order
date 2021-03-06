import React from "react";


class ChannelIndex extends React.Component {

    constructor(props) {
        super(props)
        this.showChannel = this.showChannel.bind(this)
        this.serverId = ''
        
        
        
    }

    componentDidMount() {
        
        this.props.fetchChannels(this.props.serverId, this.props.categoryId)
        
    }
    componentDidUpdate() {
        if (this.props.serverId === undefined || this.serverId !== this.props.serverId)
        this.props.fetchChannels(this.props.serverId, this.props.categoryId)
        this.serverId = this.props.serverId
    }

    showChannel(channel) {
        const last = location.hash.split('/')[2]
        if (last !== undefined) {
            const lastButton = document.getElementById(`channel${last}`)
            lastButton.style.background = 'rgba(0, 0, 0, 0)'
            lastButton.style.color = 'grey'
        }
        const thisButton = document.getElementById(`channel${channel.id}`)
        thisButton.style.background = 'rgb(81, 81, 81)';
        thisButton.style.color = 'white';
        location.hash = `/${this.props.serverId}/${channel.id}`
    }

    makeButton(channel) {
        if (channel.category_id === this.props.categoryId) {
            return (
                <div className="channelIndexItem" key={channel.id}>
                    <button id={`channel${channel.id}`} className='channelButton' onClick={() => this.showChannel(channel)}>
                        <div className="hash">
                            #   
                        </div>
                        <div>
                            {  channel.name}
                        </div>
                    </button>
                    { this.props.server.members[this.props.currentUser.id] !== undefined && this.props.server.members[this.props.currentUser.id].role === 'Moderator' ?  <button className="channelDeleteButton" onClick={() => this.props.deleteChannel(this.props.serverId, this.props.categoryId, channel.id)}>X</button> : null }
                </div>
            )
        }
    }

    render() {
        if (this.props.channels.length > 0) {
            return (
                <div className='channelIndex' id={`channelIndex${this.props.categoryId}`}>
                    {this.props.channels.map(channel => (this.makeButton(channel)))}
                </div>
            )
        } else {
            return (
                <div style={{display:'none'}}>loading</div> 
            )
        }
    }
}

export default ChannelIndex