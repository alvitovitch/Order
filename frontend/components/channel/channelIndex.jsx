import React from "react";


class ChannelIndex extends React.Component {

    constructor(props) {
        super(props)
        this.showChannel = this.showChannel.bind(this)
        this.state = {
            channels: this.props.channels
        }
        
        
    }

    componentDidMount() {
        
        this.props.fetchChannels(this.props.serverId, this.props.categoryId)
        .then(channels => this.setState({channels: this.props.channels}))
    }

    showChannel(channel) {
        location.hash = `/${this.props.serverId}/${channel.id}`
    }

    render() {
        if (this.state.channels.length > 0) {
            return (
                <div className='channelIndex'>
                    {this.state.channels.map(channel => (
                    <button onClick={() => this.showChannel(channel)}>{channel.name}</button>))}
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