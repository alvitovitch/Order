class Api::ChannelsController < ApplicationController

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def index 
        debugger
        @channels = Category.find_by(id: params[:category_id]).channels
    end

    private

    def channel_params 
        params.require(:channel).permit(:name, :server_id)
    end

end
