import React from "react";


class ChannelIndex extends React.Component {

    constructor(props) {
        super(props)
        this.showChannel = this.showChannel.bind(this)
        
        
    }

    componentDidMount() {
        this.props.fetchChannels(this.props.serverId, this.props.categoryId)
    }

    showChannel(channel) {
        location.hash = `/${this.props.serverId}/${channel.id}`
    }

    render() {
        debugger
        if (this.props.channels.length > 0) {
            return (
                <div>
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