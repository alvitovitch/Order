import React from "react";

class MessageIndexItem extends React.Component {

    constructor(props) {
        super(props)
        
    }


    render() {
        if (this.props.author !== undefined){
            return(
                <div className="messageItem">
                    <div className="messageAvatar">
                        <img className='userAvatar' src={window.userAvatar} alt="userAvatar" />
                    </div>
                    <div className="messageItemMain">
                        <div className="nameDate">
                            <div className="messageUsername">
                                {this.props.author.username}
                            </div>
                            <div className="date">
                                {this.props.message.updated_at.slice(0,10)}
                            </div>
                        </div>
                        <div className="messageBody">
                            {this.props.message.body}
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div className="messageItem">
                    <div className="messageAvatar">
                        <img className='userAvatar' src={window.userAvatar} alt="userAvatar" />
                    </div>
                    <div className="messageItemMain">
                        <div className="nameDate">
                            <div className="messageUsername">
                                Deleted
                            </div>
                            <div className="date">
                                {this.props.message.updated_at.slice(0,10)}
                            </div>
                        </div>
                        <div className="messageBody">
                            deleted
                        </div>
                    </div>
                </div>
        )
    }
}

export default MessageIndexItem