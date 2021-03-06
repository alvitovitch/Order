import React from "react";
import MessageIndexItemContainer from "./messageIndexItemContainer";
import consumer from '../../consumer';

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

        const fetchMessages = () => this.props.fetchMessages(this.props.serverId, this.props.channel.category_id, this.props.channel.id)
        consumer.subscriptions.create({channel: 'MessagesChannel', id:this.props.channel.id}, {
            connected(){

            },
            disconnected() {

            },
            received(data) {
                if (data.type = 'fetchMessages'){
                    fetchMessages()
                }
            }
        })
    }
    componentDidUpdate() {
        if (this.channelId !== this.props.channel.id){
            this.props.fetchMessages(this.props.serverId, this.props.channel.category_id, this.props.channel.id )
            this.channelId = this.props.channel.id
        }
        if (document.getElementById('messageIndexItems') !== null){
            this.scrollToBottom()
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
            .then(this.setState({body: ``}))
            
    }

    scrollToBottom() {
        const final = document.getElementById('messageIndexItems').lastChild
        final.scrollIntoView({behavior: 'smooth'})
    }

    render() {
        
        if (this.props.messages !== undefined && Object.values(this.props.messages).length > 0) {
        return(
            <div id='messageIndex'>
                <div id='messageIndexItems'>
                    {Object.values(this.props.messages).map(message => (<MessageIndexItemContainer key={message.id} message={message}/>))}
                </div>
                    <form id='messageForm' onSubmit={this.handleSubmit}>
                                <input type="text" value={this.state.body} 
                                onChange= {this.update('body')} placeholder={`Message #${this.props.channel.name}`}/>
                    </form>
            </div>
        ) } else {
            return(
                <div id='emptyChannel'>
                    <div className="newChannelMessage">Looks like no one has posted yet</div>
                        <form id='messageForm' onSubmit={this.handleSubmit}>
                                    <input type='text' value={this.state.body} 
                                    onChange= {this.update('body')} placeholder={`Message #${this.props.channel.name}`}></input> 
                        </form>
                </div>
            )
        }
    } 
}


export default MessageIndex