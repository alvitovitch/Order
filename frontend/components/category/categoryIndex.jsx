import React from "react";
import CategoryIndexItem from "./categoryIndexItem";


class CategoryIndex extends React.Component {

    constructor(props) {
        super(props)    
        this.state = {
            categories: props.categories
        }
    }

    componentDidMount() {
        this.props.fetchCategories()
            .then( categories => this.setState({categories: categories.values}))
    }
    render() {
        debugger
        if (this.state.categories !== undefined){
            debugger
            return(
                <div>
                    {this.state.categories.map(category => (<CategoryIndexItem category={category}/>) )}
                </div>
            )
        } else
        return(
            <div></div>
        )
    }
}

export default CategoryIndex