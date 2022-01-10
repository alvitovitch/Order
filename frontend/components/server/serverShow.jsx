import React from "react";
import ServerIndexContainer from "../home/serverIndexContainer";
import CategoryIndexContainer from "../category/categoryIndexContainer";

class ServerShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            server: props.server,
            categories: props.categories
        }

    }

    componentDidMount() {
        this.props.fetchServer()
        this.props.getServers()
        this.props.fetchCategories()
    }

    render(){
        if (this.props.server !== undefined) {
            return (
                <div className="showPage">
                    <ServerIndexContainer servers={this.props.servers} />
                    <CategoryIndexContainer server={this.props.server}/>
                    <div>
                    </div>
                        <div>
                            channels go here
                        </div>
                </div>
            )}
        else {
            return null 
        }
    }
}

export default ServerShow