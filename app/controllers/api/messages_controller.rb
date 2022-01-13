class Api::MessagesController < ApplicationController

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

    def index
        debugger
        @messages = Channel.find_by(id: params[:channel_id]).messages
        render :index
    end

    def destroy
        @message = Message.find_by(id: params[:id])
        if @message && @message.author == current_user
            @message.delete
            render :show
        end
    end

    private

    def message_params
        params.require(:message).permit(:channel_id, :author_id, :body, :reply, :replied_id)
    end
    
end
