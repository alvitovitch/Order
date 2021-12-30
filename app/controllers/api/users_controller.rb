class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
        else
            render json: @user.errors.full_messages, status: 422
        end
        
    end


    private

    def user_params
    
        params.require(:user).permit(:email, :phone_number, :username, :password, :user_avatar)

    end


end
