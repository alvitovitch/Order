import React from "react";

class MessageIndexItem extends React.Component {

    constructor(props) {
        super(props)
        
    }

    // is a string a valid url

    bodyType(str) {
    
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        if (!!pattern.test(str)) {
                const len = str.length
                if (['png', 'gif', 'jpg'].includes(str.slice(len-3)) ) {
                    return(
                        <img className="message-image" alt="Image not found" onError={(e) => {e.target.src=window.missing; e.target.onClick={}}} onClick={() => window.open(str, "_blank")} src={str} />
                    )
                }
                return <a href={str} target='_blank'>{str}</a>
            };      
        return str
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
                            {this.bodyType(this.props.message.body)}
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