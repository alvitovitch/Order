class Api::ServersController < ApplicationController

    def create
        @server = Server.new(server_params)

        if @server.save
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def index
        @servers = current_user.servers
        render :index
    end

    def show
        @server = Server.find_by(id: params[:id])
        render :show
    end


    private

    def server_params
        params.require(:server).permit(:sever_name, :server_avatar, :creator_id, :server_type)
    end


end