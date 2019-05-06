class Api::UsersServersController < ApplicationController
    def create
        @user_server = User_Server.new(user_server_params)
        if @user_server.save
            render "api/users_servers/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_server_params
        params.require(:user_server).permit(:user_id, :server_id)
    end
end
        