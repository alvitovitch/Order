class Api::CategoriesController < ApplicationController

    def create
        @category = Category.new(category_params)
        if @category.save
            render :show
        else
            render json: @category.errors.full_messages, status: 422
        end
    end

    def index 
        @categories = Server.find_by(id: params[:server_id]).categories
    end

    private

    def category_params 
        params.require(:category).permit(:name, :server_id)
    end

end
