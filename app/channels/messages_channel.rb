class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # @channel = Channel.find(params[:id])
    # stream_for @channel
    stop_all_streams
    stream_from params[:id]
  end

  def receive(data)
    console.log(data)
    user = User.find_by(id: data['currentUserId'])
    message = @channel.messages.create(content: data['content', user: user])
    MessagesChannel.broadcast_to(@channel, MessageSerializer.new(message).serialized_json)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end
end
