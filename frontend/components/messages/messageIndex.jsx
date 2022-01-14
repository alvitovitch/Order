import React from "react";
import MessageIndexItemContainer from "./messageIndexItemContainer";

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
        
        if (this.props.messages !== undefined && Object.values(this.props.messages).length > 0) {
        return(
            <div id='messageIndex'>
                <div id='messageIndexItems'>
                    {Object.values(this.props.messages).map(message => (<MessageIndexItemContainer message={message}/>))}
                </div>
                <div>
                    <form id='messageForm' onSubmit={this.handleSubmit}>
                                <input type="text" value={this.state.body} 
                                onChange= {this.update('body')}/>
                    </form>
                </div>
            </div>
        ) } else {
            return(
                <div>
                    <div>Looks like no one has posted yet</div>
                    <div>
                        <form id='messageForm' onSubmit={this.handleSubmit}>
                                    <input type="text" value={this.state.body} 
                                    onChange= {this.update('body')}/>
                        </form>
                    </div>
                </div>
            )
        }
    } 
}


export default MessageIndex