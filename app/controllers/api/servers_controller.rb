class Api::ServersController < ApplicationController

    def create
        @server = Server.new(server_params)
        @server.creator_id = current_user.id
        if @server.save
            d_cat = Category.new(name: 'Text Channels', server_id: @server.id)
            d_cat.save
            d_chan = Channel.new(name: 'Text Channel', category_id: d_cat.id)
            d_chan.save
            d_role = Role.new(name: 'Moderator', server_id: @server.id)
            d_role.save
            d_role2 = Role.new(name: 'Member', server_id: @server.id)
            d_role2.save
            d_mem = Membership.new(server_id: @server.id, role_id: d_role.id, user_id: current_user.id)
            d_mem.save
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
        params.require(:server).permit(:server_name, :server_avatar, :creator_id, :server_type)
    end


end