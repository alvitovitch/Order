class Api::MembershipsController < ApplicationController

    def create
        @membership = Membership.new(membership_params)
        if @membership.save
            Server.find_by(id: @membership.server_id).memberships.each do |membership|
                ActionCable.server.broadcast "user#{membership.user_id}", {type: 'fetchUser', user_id: @membership.user_id}
                ActionCable.server.broadcast "user#{membership.user_id}", {type: 'servers'}
            end
            render :show
        else
            render json: @membership.errors.full_messages, status: 422
        end
        
    end

    def index
        @memberships = Server.find_by(id: params[:server_id]).memberships
        render :index
    end

    def show
        @membership = Membership.find_by(id: params[:id])
        render :show
    end

    def destroy
        @membership = Membership.find_by(id: params[:id])
        @membership.delete
        render :show
    end

    private

    def membership_params
        params.require(:membership).permit(:server_id, :user_id, :role_id)

    end


end
