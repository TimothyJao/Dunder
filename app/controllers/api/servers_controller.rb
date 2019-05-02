class Api::UsersController < ApplicationController

    before_action :require_logged_in

    def create
        @server = Server.new(server_params)

        if @user.save
            login(@user)
            render "api/servers/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def server_params
        params.require(:server).permit(:name, :owned_id)
    end
end
        