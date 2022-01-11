import React from "react";
import ChannelIndexContainer from "../channel/channelIndexContainer";

class CategoryIndexItem extends React.Component {
    constructor(props){
        super(props)
        
    }

    
    

    render() {
        return(
            <div className='categoryItem'>
                <div className='categoryTopLine'>
                {this.props.category.name}
                <button onClick={() => this.props.deleteCategory(this.props.category)}>x</button>
                </div>
                <ChannelIndexContainer serverId={this.props.category.server_id}
                 categoryId={this.props.category.id} />
            </div>
        )
    }
}

export default CategoryIndexItem