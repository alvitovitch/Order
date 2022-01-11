import React from "react";
import ChannelIndexContainer from "../channel/channelIndexContainer";

class CategoryIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            category: this.props.category,
            name: ''
        }
        this.show = this.show.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleDelete() {
        this.props.deleteCategory(this.state.category)
        this.setState({category: this.state.category})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createChannel(this.state.category, {
            channel: {
                name: this.state.name, category_id: this.state.category.id 
            }
        })
        .then(document.getElementById('createCategoryBackground').style.visibility = 'hidden')
        .then(this.setState({categories: this.props.categories}))

    }

    update(field) {
            return e=> this.setState({[field]: e.currentTarget.value})
        
    }

    show() {
        const ele = document.getElementById('createChannelBackground')
        ele.category = this.state.category
        ele.style.visibility = 'visible' 
    }

    hideBackground(e) {
        const bkg = document.getElementById('createChannelBackground')
        if (e.target === bkg){
            bkg.style.visibility = 'hidden'
        }
    }
    

    render() {
        return(
            <div className='categoryItem'>
                <div className='categoryTopLine'>
                {this.state.category.name}
                <button onClick={this.handleDelete}>x</button>
                <button onClick={this.show}>+</button>
                </div>
                <ChannelIndexContainer serverId={this.state.category.server_id}
                 categoryId={this.state.category.id} />
                 <div>
                    
                </div>
            </div>
        )
    }
}

export default CategoryIndexItem