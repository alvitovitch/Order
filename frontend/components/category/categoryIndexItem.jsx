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
        this.reveal = this.reveal.bind(this)
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

    reveal() {
       const channelIndex = document.getElementById(`channelIndex${this.props.category.id}`)
       const title = document.getElementById(`categoryTitle${this.props.category.id}`)
       if (channelIndex.style.display === '' || channelIndex.style.display === 'none') {
           title.style.transform = 'rotate(90deg)'
           setTimeout(() => channelIndex.style.display = 'flex', 200)

       } else {
            title.style.transform = 'rotate(0deg)'
            setTimeout(() => channelIndex.style.display = 'none', 200)

       }
    }
    

    render() {
        document.addEventListener("contextmenu", e => {
            if (e.target.className === 'categoryCollapse' || e.target.parentElement.className === 'categoryCollapse') {
                e.preventDefault()
                const deleteButton = document.getElementById('deleteCategoryButton')
                deleteButton.style.display = 'flex'
                deleteButton.style.left = `${e.x}px`
                deleteButton.style.top = `${e.y}px`
                deleteButton.action = () => this.handleDelete
            }
            
          });
        document.addEventListener('click', e => {
            const deleteButton = document.getElementById('deleteCategoryButton')
            if (deleteButton.style.display === 'flex' &&
            e.currentTarget !== deleteButton ) {
                deleteButton.style.display = 'none'
            }
        })
        return(
            <div className='categoryItem'>
                <div className='categoryTopLine'>
                    <div className='categoryCollapse' onClick={this.reveal}>
                        <button id={`categoryTitle${this.props.category.id}`} className='collapseButton' >{'>'}</button>
                        <div>
                            {this.props.category.name.toUpperCase()}
                        </div>
                    </div>
                <button className="addChannelButton" onClick={this.show}>+</button>
                </div>
                <ChannelIndexContainer serverId={this.props.category.server_id}
                 categoryId={this.props.category.id} />
                 <div>
                    
                </div>
            </div>
        )
    }
}

export default CategoryIndexItem