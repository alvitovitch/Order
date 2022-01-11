import React from "react";
import CategoryIndexItemContainer from "./categoryIndexItemContainer";


class CategoryIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            categories: this.props.categories
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
        .then(document.getElementById('createCategoryBackground').style.visibility = 'hidden')
        .then(this.setState({categories: this.props.categories}))

    }

    update(field) {
            return e=> this.setState({[field]: e.currentTarget.value})
        
    }

    show() {
        const ele = document.getElementById('createCategoryBackground')
        ele.style.visibility = 'visible' 
    }

    hideBackground(e) {
        debugger
        const bkg = document.getElementById('createCategoryBackground')
        if (e.target === bkg){
            debugger    
            bkg.style.visibility = 'hidden'
        }
    }
    

    render() {
        if (this.props.categories){
            return(
                <div id='categoryIndex'>
                    <div id='serverName'>
                        {this.props.server.server_name}
                        <button onClick={this.show}>+</button>
                    </div>
                    <div id='createCategoryBackground' onClick={e => this.hideBackground(e)}>
                        <div id='createCategory' >
                            <form onSubmit={this.handleSubmit}>Create Category
                                <label>Category Name
                                    <input type="text" value={this.state.name} 
                                    onChange= {this.update('name')}/>
                                </label>  
                                    <button>Create Category</button>
                            </form>
                        </div>
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