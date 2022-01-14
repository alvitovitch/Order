class Api::ChannelsController < ApplicationController

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def show
        @channel = Channel.find_by(id: params[:id])
        render :show
    end

    def index 
        @channels = Category.find_by(id: params[:category_id]).channels
        render :index
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        if @channel
            @channel.destroy
            render :show
        end
    end

    private

    def channel_params 
        params.require(:channel).permit(:name, :category_id)
    end

end
