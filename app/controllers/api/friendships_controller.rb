class Api::FriendshipsController < ApplicationController

    def create
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
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
