class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        if params[:search].length > 0
            @users = User.where("LOWER(username) LIKE ?", "%#{params[:search].downcase}%")
        else
            @users = []
        end
        
        if @users
            render "api/users/index"
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
        