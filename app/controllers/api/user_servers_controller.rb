class Api::UserServersController < ApplicationController
    def create
        @server_id = Server.find_by(url: params[:userServer][:url]).id
        if @server_id
            @user_server = UserServer.new({user_id: current_user.id, server_id: @server_id})
            if @user_server.save
                render "api/users_servers/show"
            else 
                render json: @user.errors.full_messages, status: 422
            end
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_server_params
        params.require(:userServer).permit(:url)
    end
end
        