import React from "react";
import CategoryIndexItem from "./categoryIndexItem";


class CategoryIndex extends React.Component {

    constructor(props) {
        super(props)    
    }

    
 
    

    render() {
        if (this.props.categories){
            return(
                <div>
                        {this.props.categories.map(category => (<CategoryIndexItem category={category}/>))}
                </div>
            )
        }
        else {
            return(
                <div>categories loading</div>
            )
        }
    }
    
}

export default CategoryIndex