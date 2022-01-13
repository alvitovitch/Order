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
        location.hash = `/${this.props.serverId}/${channel.id}`
    }

    makeButton(channel) {
        if (channel.category_id === this.props.categoryId) {
            return (
                <button onClick={() => this.showChannel(channel)}>{channel.name}</button>
            )
        }
    }

    render() {
        if (this.props.channels.length > 0) {
            return (
                <div className='channelIndex'>
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