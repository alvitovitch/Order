import React from "react";


class ChannelIndex extends React.Component {

    constructor(props) {
        debugger
        super(props)
        this.showChannel = this.showChannel.bind(this)
        
        
        
    }

    componentDidMount() {
        
        this.props.fetchChannels(this.props.serverId, this.props.categoryId)
        
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