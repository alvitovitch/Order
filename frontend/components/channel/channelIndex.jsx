import React from "react";


class ChannelIndex extends React.Component {

    constructor(props) {
        super(props)
        this.showChannel = this.showChannel.bind(this)
        this.state = {
            channels: []
        }
        
        
    }

    componentDidMount() {
        
        this.props.fetchChannels(this.props.serverId, this.props.categoryId)
        .then(channels => this.setState({channels: this.props.channels})).then(
            console.log(this.props.channels)
        )
    }

    showChannel(channel) {
        location.hash = `/${this.props.serverId}/${channel.id}`
    }

    render() {
        debugger
        if (this.state.channels.length > 0) {
            return (
                <div className='channelIndex'>
                    {this.props.channels.map(channel => (
                    <button onClick={() => this.showChannel(channel)}>{channel.name}</button>))}
                </div>
            )
        } else {
            return (
                <div>loading</div>
            )
        }
    }
}

export default ChannelIndex