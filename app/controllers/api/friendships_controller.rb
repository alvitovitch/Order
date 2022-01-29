class Api::FriendshipsController < ApplicationController

    def create
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
            if @friendship.is_mutual?
                friend_server = Server.new(server_name: @friendship.user.username + @friendship.friend.username, server_type: 0, creator_id: @freindship.user_id)
                friend_server.save
                friend_role = Role.new(name: 'Friend', server_id: friend_server.id)
                friend_role.save
                user_membership = Membership.new(server_id: friend_server.id, role_id: friend_role.id , user_id: @friendships.user_id)
                user_membership.save
                friend_membership = Membership.new(server_id: friend_server.id, role_id: friend_role.id , user_id: @friendships.friend_id)
                friend_membership.save
                category = Category.new(name: 'Text Channel', server_id: friend_server.id)
                category.save
                channel = Channel.new(category_id: category.id, name: 'Friend Chat')
                channel.save
            end
            render :show
        else
            render json: @freindship.errors.full_messages, status: 422
        end
    end

    def show
        @friendship = Friendship.find_by(id: params[:id])
        if @friendship
            render :show
        end
    end

    def index
        @friendships = current_user.friendships
        @pending = current_user.received_friendships
        render :index
    end


    def destroy
        @friendship = Friendship.find_by(id: params[:id])
        @friendship.delete
        render :show
    end

    private

    def friendship_params
        params.require(:friendship).permit(:user_id, :friend_id, :user_accepted, :friend_accepted)
    end

end
