import React from "react";


class ChannelIndex extends React.Component {

    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.fetchChannels(this.props.serverId, this.props.categoryId)
    }

    render() {
        debugger
        if (this.props.channels.length > 0) {
            return (
                <div>
                    {this.props.channels.map(channel => (<li>{channel.name}</li>))}
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