class Api::MessagesController < ApplicationController

    def create
        @message = Message.new(message_params)
        if @message.save
            render :show
        else 
            render json: @message.errors.full_messages, status: 422
        end
    end

    def index
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
