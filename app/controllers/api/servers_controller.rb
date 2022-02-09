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
            ActionCable.server.broadcast "global", {type: 'servers'}
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def index
        @servers = Server.all
        render :index
    end

    def show
        @server = Server.find_by(id: params[:id])
        render :show
    end

    def destroy
        @server = Server.find_by(id: params[:id])
        if @server
            @server.destroy
            @server.members.each do |member|
                ActionCable.server.broadcast "user#{member.id}", {type: 'servers'}
            end
            render :show
        end
    end


    def update
        @server = Server.find_by(id: params[:server][:id])
        if @server
            if @server.update(server_params)
                @server.memberships.each do |membership|
                    ActionCable.server.broadcast "user#{membership.user_id}", {type: 'servers'}
                end
                render :show
            end
        end
    end


    private

    def server_params
        params.require(:server).permit(:server_name, :server_avatar, :creator_id, :server_type)
    end


end