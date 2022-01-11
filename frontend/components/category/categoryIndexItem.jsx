import React from "react";
import ChannelIndexContainer from "../channel/channelIndexContainer";

class CategoryIndexItem extends React.Component {
    constructor(props){
        super(props)
        
    }

    
    

    render() {
        return(
            <div class='categoryItem'>
                {this.props.category.name}
                <ChannelIndexContainer serverId={this.props.category.server_id} categoryId={this.props.category.id} />
            </div>
        )
    }
}

export default CategoryIndexItem