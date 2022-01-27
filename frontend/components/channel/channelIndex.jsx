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
                <div className="channelIndexItem" key={channel.id}>
                    <button id={`channel${channel.id}`} className='channelButton' onClick={() => this.showChannel(channel)}>
                        <div className="hash">
                            #   
                        </div>
                        <div>
                            {  channel.name}
                        </div>
                    </button>
                    <button className="channelDeleteButton" onClick={() => this.props.deleteChannel(this.props.serverId, this.props.categoryId, channel.id)}>X</button>
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