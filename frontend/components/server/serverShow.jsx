import React from "react";
import ServerIndexContainer from "../home/serverIndexContainer";
import CategoryIndexContainer from "../category/categoryIndexContainer";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { ProtectedRoute, AuthRoute} from '../../util/route_util'
import selectedChannelPageContainer from "./selectedChannelPageContainer";


class ServerShow extends React.Component {

    constructor(props) {
        super(props)
        

    }

    componentDidMount() {  
        this.props.fetchServer(this.props.match.params[0])
        this.props.fetchCategories(this.props.match.params[0])        
        
    }

    render(){
        if (this.props.categories.length !== 0) {
            return (
                <div className="showPage">
                    <ServerIndexContainer servers={this.props.servers} server={this.props.server} />
                    <CategoryIndexContainer categories={this.props.categories} server={this.props.server}/>
                    <div>
                    </div>
                    <div id='middleComponent'>
                        <Switch>
                            <ProtectedRoute path='/*/*' component={selectedChannelPageContainer} />
                        </Switch>
                    </div>       
                </div>
            )}
        else {
            return (
                <div>Loading</div>
                
            ) 
        }
    }
}

export default ServerShow