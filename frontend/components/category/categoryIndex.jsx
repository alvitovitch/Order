import React from "react";
import CategoryIndexItemContainer from "./categoryIndexItemContainer";
import consumer from "../../../app/javascript/channels/consumer";



class CategoryIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            categories: this.props.categories,
            last_server: ''
        }
        this.deleteCategory = this.deleteCategory.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.channel = ''
    }

    componentDidUpdate() {
        if (this.props.server.id !== this.state.last_server){
            this.props.fetchCategories(this.props.server.id).then(
                this.setState({last_server: this.props.server.id})
            )
        }
            if (this.props.server !== undefined) {
                // if (this.props.messages === undefined ||
                //      (Object.values(this.props.messages).length === 0 && this.fetched === false) ||
                //      Object.values(this.props.messages)[0].channel_id !== this.props.channel.id 
                //      ) {
                //     this.feteched = true
                //     
                // }
                if (this.channel !== '' && this.channel.id !== this.props.server.id) {
                    //console.log(this.channel)
                    this.channel.unsubscribe()
                }
            const fetch = () => this.props.fetchCategories(this.props.server.id)
            const channel = consumer.subscriptions.create({channel: 'CategoriesChannel', id: `${this.state.last_server}`}, {
                connected() {
                  // Called when the subscription is ready for use on the server'
                },
              
                disconnected() {
                  // Called when the subscription has been terminated by the server
                },
              
                received(data) {
                  // Called when there's incoming data on the websocket for this channel
                  console.log(data)
                  fetch()
                }
              });
              this.channel = channel
              
            }
        }
    
    handleSubmit(e) {
        e.preventDefault()
        const ele = document.getElementById('createChannelBackground')
        if (ele.style.visibility === 'visible') {
            this.props.createChannel(ele.category, {
                channel: {
                    name: this.state.name, category_id: ele.category.id 
                }
            })
            .then(this.setState({name: ''}))
            .then(document.getElementById('createChannelBackground').style.visibility = 'hidden')
            
        }
        else {
            this.props.createCategory(this.props.server.id, {
                category: {
                    name: this.state.name, server_id: this.props.server.id 
                }
            })
            .then(document.getElementById('createCategoryBackground').style.visibility = 'hidden')
            .then(this.setState({name: ''}))
        }

    }

    deleteCategory(e) {
        e.currentTarget.action()()
        e.currentTarget.style.display = 'none'
    }

    update(field) {
            return e=> this.setState({[field]: e.currentTarget.value})
        
    }

    show() {
        const ele = document.getElementById('createCategoryBackground')
        ele.style.visibility = 'visible' 
    }

    hideBackground(e) {
        const bkg = document.getElementById('createCategoryBackground')
        const oBkg = document.getElementById('createChannelBackground')
        if (e.target === bkg){
            bkg.style.visibility = 'hidden'
        } else if (e.target === oBkg) {
            oBkg.style.visibility = 'hidden'
        }
    }
    

    render() {
        if (this.props.categories.length > 0){
            return(
                <div id='categoryIndex'>
                    <div id='serverName'>
                        {this.props.server.server_name}
                        <button id='newServerButton' onClick={this.show}>+</button>
                    </div>
                    <div id='createCategoryBackground' onClick={e => this.hideBackground(e)}>
                        <div id='createCategory' >
                            <form id='createCategoryForm' onSubmit={this.handleSubmit}>
                                <div id='createCategoryTitle'>
                                    Create Category
                                </div>
                                    <div>
                                        <div id='categoryName'>
                                            CATEGORY NAME
                                        </div>
                                        <input className="inputBox" type="text" value={this.state.name} 
                                        onChange= {this.update('name')}/>
                                    </div>
                                        <div id='createCategoryButtonDiv'>
                                            <button id='createCategoryButton'>Create Category</button>
                                        </div>
                            </form>
                        </div>
                    </div>
                    <div id='createChannelBackground' onClick={e => this.hideBackground(e)}>
                            <div id='createChannel' >
                                <form id='createChannelForm' onSubmit={this.handleSubmit}>
                                    <div id="createChannelTitle">
                                        Create Channel
                                    </div>
                                    <div id='channelName'>
                                        Channel Name    
                                    </div>
                                        <input className='inputBox' type="text" value={this.state.name} 
                                        onChange= {this.update('name')}/>
                                      <div id='createChannelButtonDiv'>
                                        <button id='createChannelButton'>Create Channel</button>
                                      </div>
                                </form>
                            </div>
                    </div>
                    <button id='deleteCategoryButton' onClick={e => this.deleteCategory(e)}>Delete Category</button>
                    
                        {this.props.categories.map(category => (<CategoryIndexItemContainer key={category.id} category={category}/>))}
                        
                </div>
            )
        }
        else if (this.props.server !== undefined) {
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
                    <div id='createChannelBackground' onClick={e => this.hideBackground(e)}>
                            <div id='createChannel' >
                                <form onSubmit={this.handleSubmit}>Create Channel
                                    <label>Channel Name
                                        <input type="text" value={this.state.name} 
                                        onChange= {this.update('name')}/>
                                    </label>  
                                        <button>Create Channel</button>
                                </form>
                            </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>loading</div>
            )
        }
    }
    
}

export default CategoryIndex