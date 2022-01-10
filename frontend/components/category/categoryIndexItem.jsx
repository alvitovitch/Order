import React from "react";

class CategoryIndexItem extends React.Component {
    constructor(props){
        debugger
        super(props)
    }

    render() {

        return(
            <div>
                {this.props.category.name}
            </div>
        )
    }
}

export default CategoryIndexItem