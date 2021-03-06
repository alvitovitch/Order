class Api::CategoriesController < ApplicationController

    def create
        @category = Category.new(category_params)
        if @category.save
            ActionCable.server.broadcast "#{@category.server_id}", messages: 'hi'
            render :show
        else
            render json: @category.errors.full_messages, status: 422
        end
    end

    def index 
        @categories = Server.find_by(id: params[:server_id]).categories
        render :index
    end

    def show
        @category = Category.find_by(id: params[:id])
        render :show
    end

    def update
        @category = Category.find_by(id: params[:category][:id])
        # if @category.server.creator_id == current_user.id
            @category.update(category_params)
            ActionCable.server.broadcast "#{@category.server_id}", messages: 'hi'
            render :show
        # end
    end

    def destroy
        @category = Category.find_by(id: params[:id])
        if @category.server.creator_id == current_user.id
            @category.delete
            ActionCable.server.broadcast "#{@category.server_id}", messages: 'hi'
            render :show
        end
    end


    private

    def category_params 
        params.require(:category).permit(:name, :server_id, :id)
    end

end
