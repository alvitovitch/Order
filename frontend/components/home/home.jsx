import React from "react";
import ServerIndexContainer from "./serverIndexContainer";
import UserInfoContainer from "../userInfo/userInfoContainer";
//import MessageList from "../messages/messageList";
import consumer from "../../../app/javascript/channels/consumer";
import CategoryIndexContainer from "../category/categoryIndexContainer";


class Home extends React.Component {
    constructor(props) {
        super(props)
        
        
    }

    componentDidMount() {
        this.props.getServers()
        this.props.getUsers()
    }
    

    render() {
        

        
          



        if (this.props.currentUser) {
        return (
            <div id='homeContainer'>
                <div id="leftComponent">
                    <ServerIndexContainer servers={this.props.servers} />
                    <div id='leftRightColumn'>
                        <div id='searchBar'>
                            <div id='leftSearchBar'>
                                Find or start a conversation
                            </div>
                        </div>
                        <div id='dmList'>
                            this will be filled with dms
                        </div>
                        <UserInfoContainer />
                    </div>
                </div>
                <div id='rightComponentTwo'>
                    everything else
                </div>
                <button onClick={this.props.logout}>
                    logout
                </button>
            </div>
        )}
        else 
        return(
            <h1>You are logged out!</h1>
        )
    }
}

export default Home