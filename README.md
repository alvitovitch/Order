

<h1>Order</h1>


<i>"In all chaos there is a cosmos, in all discord a secret Order."

--Carl Jung</i>

<br>
<a h='https://app-order-vitovitch.herokuapp.com/#/'>Live Site </a>

<br>
<img src='./app/assets/images/readme/OrderScreenShot.png'  height='360px' />

# Table of Contents #

* About
* Technology Utilized
* Live Chat
* Code Related to Broadcasting

## About 
---
<a h='https://app-order-vitovitch.herokuapp.com/#/'>Order</a> is a clone of Discord, an instant messaging application where users create and join servers to build their own communities. Inside of a server users can create and destroy categories, the folders which contain the server's channels. Inside of those categories users can create and destroy channels, and inside of those users can write and send messages to one another in real time!

## Technology Utilized ##
---
 * Ruby
 * Rails
 * React
 * Redux
 * Javascript
 * Redis/Websockets

 ## Live Chat <a name="Live"></a>
 ____

 <img src='./app/assets/images/readme/messageIndex.png' />

 Initially, there were a fair number of issues setting up and implementing the Live Chat Component. My initial approach was to create the websocket subscription at the server level which led to some complications when attempting to send data from deeply nested components. I got around this by implementing a subscription at the channel level and having the `create` function from the `MessagesController` make a broadcast to the appropriate channel whenever a message was saved. I then tied the `recieved` method of each channel subscription to the `fetchMessages` thunk action. Utilizing this framework of updating websocket servers on the completion of actions I plan on expanding Order's functionality.


 ## Code related to Broadcasting

 ```
 def create
        @message = Message.new(message_params)
        @message.author_id = current_user.id
        if @message.save
            chan = @message.channel.id
            message = [@message.server.id, @message.category.id, @message.channel_id]
            ActionCable.server.broadcast chan, messages: message
            render :show
        else 
            render json: @message.errors.full_messages, status: 422
        end
    end
 ``` 

 <br>

 Once I got this basic broadcasting down I realized I could use it for more than just sending messages, but also reporting user actions to other users. If a mod renames a Server everyone who is a member is told to fetch the Server. Likewise with Friendships, if one is made let the other person know it's time to update your incoming friendships!

 ## Code relating to updating friendships 

### In the Friendship Controller
```
if @friendship.save
    ActionCable.server.broadcast "user#{@friendship.friend_id}", type: 'friendship'
end
```
### In the Server Index
```
consumer.subscriptions.create({channel: 'UsersChannel', id: this.props.currentUser.id}, {
    received(data) {
        if (data.type === 'friendship'){
            fetchFriends()
        }
    }
}
``` 
### In the Friendship Index
```
componentDidUpdate(prevProps) {
        if (this.state !== null){
            if (prevProps.friendships !== this.props.friendships) {
                if (this.state.selected.id === 'all') {
                    this.setState({
                        friendships: this.props.friendships.outgoing_friendships.map(friendship => {
                            if (friendship.mutual === true){
                            return {friend: this.props.users[friendship.friend_id], friendship: friendship}
                        }}).filter(friendship => friendship !== undefined)
                    })
            } else if (this.state.selected.id === 'pending') {
                this.setState({
                    friendships: this.props.friendships.outgoing_friendships.map(friendship => {
                        if (friendship.mutual === false){
                            return {friend: this.props.users[friendship.friend_id], friendship: friendship}
                    }}).filter(friendship => friendship !== undefined).concat(
                        this.props.friendships.pending.map(friendship => {
                            if (friendship.mutual === false){
                            return {friend: this.props.users[friendship.user_id], friendship: friendship}
                        }}).filter(friendship => friendship !== undefined)
                    )
                })
                }
            }
        }
    }
```
Just an example of the shenanagins I got up to with Redis and dynamically updating each user's components. 
<br>
All in all I am very proud of my work! Please check it out! 