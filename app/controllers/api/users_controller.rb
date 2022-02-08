    class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            Membership.create(server_id: Server.first.id, user_id: @user.id, role_id: Role.first.id)
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
        
    end

    def update
        @user = User.find_by(id: params[:user][:id])
        if @user.update(user_params)
            render :show
        else
            render json: @users.errors.full_messages, status: 422
        end
    end

    def show 
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        end
    end

    def index
        @users = User.all()
        render :index
    end

    private

    def user_params
        params.require(:user).permit(:email, :phone_number, :username, :password, :user_avatar)

    end


end
