class Api::ServersController < ApplicationController
    def index
        @servers = current_user.servers
        render "api/servers/index"
    end
    
    def create
        @server = Server.new(server_params)
        @server.url = SecureRandom.urlsafe_base64(4)
        if @server.save
            @user_server = UserServer.new({user_id: current_user.id, server_id: @server.id})
            @user_server.save
            render "api/servers/show"
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def show
        @server = Server.find_by(id: params[:id])
        if @server
            render "api/servers/show"
        else
            render json: @server.errors.full_messages, status: 422
        end
    end
    
    private

    def server_params
        params.require(:server).permit(:owner_id, :name, :url)
    end

end
        