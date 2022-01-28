import React from "react";
import ServerIndexContainer from "./serverIndexContainer";
import UserInfoContainer from "../userInfo/userInfoContainer";
import { Switch } from "react-router-dom";
import { ProtectedRoute } from "../../util/route_util";
import SelectedDmContainer from "../dms/selectedDmContainer";
import DmIndex from "./dmIndex";


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
                            <div id='friends'>
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
                        <ProtectedRoute path='/@me/*' component={SelectedDmContainer} />
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