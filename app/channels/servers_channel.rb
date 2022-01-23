class ServersChannel < ApplicationCable::Channel
    def subscribed
      # stream_from "some_channel"
      # @channel = Channel.find(params[:id])
      # stream_for @channel
      console.log(params[:id])
      stream_from "#{params[:id]}"
    end
  
    def receive(data)
      ServersChannel.broadcast_to(@channel, MessageSerializer.new(message).serialized_json)
    end
  
    def unsubscribed
      # Any cleanup needed when channel is unsubscribed
      stop_all_streams
    end
  end
  