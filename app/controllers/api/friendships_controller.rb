class Api::FriendshipsController < ApplicationController

    def create
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
            if @friendship.is_mutual?
                friend_server = Server.new(server_name: @friendship.user.username + @friendship.friend.username, server_type: 0, creator_id: @friendship.user_id)
                friend_server.save
                friend_role = Role.new(name: 'Friend', server_id: friend_server.id)
                friend_role.save
                user_membership = Membership.new(server_id: friend_server.id, role_id: friend_role.id , user_id: @friendship.user_id)
                user_membership.save
                friend_membership = Membership.new(server_id: friend_server.id, role_id: friend_role.id , user_id: @friendship.friend_id)
                friend_membership.save
                category = Category.new(name: 'Text Channel', server_id: friend_server.id)
                category.save
                channel = Channel.new(category_id: category.id, name: 'Friend Chat')
                channel.save
            end
            ActionCable.server.broadcast "user#{@friendship.friend_id}", type: 'friendship'
            ActionCable.server.broadcast "user#{@friendship.friend_id}", type: 'servers'
            render :show
        else
            render json: @friendship.errors.full_messages, status: 422
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
        if @friendship
            if @friendship.is_mutual?
                other_friendship = Friendship.find_by(user_id: @friendship.friend_id, friend_id: @friendship.user_id)
                other_friendship.delete
            end
            @friendship.delete
            ActionCable.server.broadcast "user#{@friendship.friend_id}", type: 'friendship'
            ActionCable.server.broadcast "user#{@friendship.user_id}", type: 'friendship'
            render :show
        end
    end

    private

    def friendship_params
        params.require(:friendship).permit(:user_id, :friend_id, :user_accepted, :friend_accepted)
    end

end
