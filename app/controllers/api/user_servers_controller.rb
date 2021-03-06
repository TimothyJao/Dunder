class Api::UserServersController < ApplicationController
    def index
        @users_servers = current_user.user_servers
        render "api/users_servers/index"
    end

    def create
        @server = Server.find_by(url: params[:userServer][:url])
        if @server
            @user_server = UserServer.new({user_id: current_user.id, server_id: @server.id})
            if @user_server.save
                render "api/users_servers/show"
            else 
                render json: @user_server.errors.full_messages, status: 422
            end
        else
            render json: ["Server cannot be found"], status: 422
        end
    end

    def destroy
        @user_server = UserServer.find_by(id: params[:id])
        @us = @user_server
        @user_server.destroy
        render "api/users_servers/destroy"
    end
    private

    def user_server_params
        params.require(:userServer).permit(:url, :id)
    end
end
        