import React from "react";

class MessageIndexItem extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {

        return(
            <div className="messageItem">
                <div>
                    <img className='userAvatar' src={window.userAvatar} alt="userAvatar" />
                </div>
                <div className="messageItemMain">
                    <div>
                        {this.props.author.username}
                    </div>
                    <div>
                        {this.props.message.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageIndexItem