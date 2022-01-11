import React from "react";
import CategoryIndexItemContainer from "./categoryIndexItemContainer";


class CategoryIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    
    handleSubmit(e) {
        e.preventDefault()
        this.props.createCategory(this.props.server.id, {
            category: {
                name: this.state.name, server_id: this.props.server.id 
            }
        })
        .then(
        )

    }

    update(field) {
            return e=> this.setState({[field]: e.currentTarget.value})
        
    }
    

    render() {
        if (this.props.categories){
            return(
                <div id='categoryIndex'>
                    <div id='serverName'>
                        {this.props.server.server_name}
                    </div>
                    <div id='createCategory' >
                        <form onSubmit={this.handleSubmit}>Create Category
                            <label>Category Name
                                <input type="text" value={this.state.name} 
                                onChange= {this.update('name')}/>
                            </label>  
                                <button>Create Category</button>
                        </form>
                    </div>
                        {this.props.categories.map(category => (<CategoryIndexItemContainer category={category}/>))}
                        
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