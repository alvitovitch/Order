import React from "react";
import ServerIndexContainer from "../home/serverIndexContainer";
import CategoryIndexContainer from "../category/categoryIndexContainer";

class ServerShow extends React.Component {

    constructor(props) {
        super(props)
        

    }

    componentDidMount() {  
        this.props.fetchCategories(this.props.match.params[0])        
        
    }

    render(){
        
        if (this.props.categories.length !== 0) {
            return (
                <div className="showPage">
                    <ServerIndexContainer servers={this.props.servers} />
                    <CategoryIndexContainer categories={this.props.categories}/>
                    <div>
                    </div>
                        <div>
                            channels go here
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