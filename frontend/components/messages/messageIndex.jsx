import React from "react";

class MessageIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.channelId = ''
    }

    
    update(field) {
        return e=> this.setState({[field]: e.currentTarget.value})
    }

    componentDidMount() {
        this.props.fetchMessages(this.props.serverId, this.props.channel.category_id, this.props.channel.id )
        this.channelId = this.props.channel.id
    }
    componentDidUpdate() {
        if (this.channelId !== this.props.channel.id){
            this.props.fetchMessages(this.props.serverId, this.props.channel.category_id, this.props.channel.id )
            this.channelId = this.props.channel.id
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createMessage(this.props.serverId, this.props.channel.category_id, this.props.channel.id,
            {message: {
                channel_id: this.props.channel.id,
                body: this.state.body,
                reply: false
            }} )
            .then(this.setState({body: ''}))
            
    }

    render() {
        debugger
        if (this.props.messages !== undefined && Object.values(this.props.messages).length > 0) {
        return(
            <div>
                {Object.values(this.props.messages).map(message => (<div>{message.body}</div>))}
                <div>
                    <form onSubmit={this.handleSubmit}>
                                <input type="text" value={this.state.body} 
                                onChange= {this.update('body')}/>
                    </form>
                </div>
            </div>
        ) } else {
            return(
                <div>Looks like no one has posted yet</div>
            )
        }
    } 
}


export default MessageIndex