import React from "react";
import ServerIndexContainer from "./serverIndexContainer";
import UserInfoContainer from "../userInfo/userInfoContainer";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import SelectedDmContainer from "../dms/selectedDmContainer";
import DmIndex from "./dmIndex";
import FriendsIndexContainer from "./friendsIndexContainer";


class Home extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.getServers()
        this.props.getUsers()
        this.props.getFriendships()
        document.getElementById('homeButton').style.background = 'rgb(54, 182, 79)'

    }
    

    render() {
        
        const dmSevers = this.props.servers.filter(server => server.server_type === 0)
          
        if (this.props.currentUser) {
        return (
            <div id='homeContainer'>
                <div id="leftComponent">
                    <ServerIndexContainer />
                    <div id='leftRightColumn'>
                        <div id='searchBar'>
                            <div id='leftSearchBar'>
                                Find or start a conversation
                            </div>
                        </div>
                        <div id='dmList'>
                            <div id='friends' onClick={() => location.hash = '/@me'}>
                                <img id='friendImage' src={window.people} alt="" />
                                <div id='friendsImage'>
                                Friends
                                </div>
                            </div>
                            <div>
                                <DmIndex servers={dmSevers} currentUser={this.props.currentUser}/>
                            </div>
                        </div>
                        <UserInfoContainer />
                    </div>
                </div>
                <div id='middleComponent'>
                    <Switch>
                        <Route path='/@me/*' component={SelectedDmContainer} />
                        { this.props.friendships.pending !== undefined ? <Route path='/@me' component={FriendsIndexContainer} /> : <div></div> }
                    </Switch>
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