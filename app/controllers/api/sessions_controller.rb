class Api::SessionsController < ApplicationController

def create
  @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
  )

  if @user
    login(@user)
    render "/"
  else
    render json: ["Invalid username/password combination"], status: 401
  end
end

  def destroy
    @user = current_user
    if @user
      logout!
      render "/"
    else
      render json: ["Please signin before doing that!"], status: 404
    end
  end
end