class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # @channel = Channel.find(params[:id])
    # stream_for @channel
    
    stream_from "#{params[:id]}"
  end

  def receive(data)
    
    # user = User.find_by(id: data['currentUserId'])
    # message = @channel.messages.create(content: data['content', user: user])
    # MessagesChannel.broadcast_to(@channel, MessageSerializer.new(message).serialized_json)
    MessagesChannel.broadcast_to(@channel.id, {type: 'fetchMessages'})
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end
end
