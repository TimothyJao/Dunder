class Api::ServersController < ApplicationController
    def index
        @servers = current_user.servers

        @servers.each do |server|
            server.channels.each do |channel|
                if channel.name == "general"
                    server[:general_id] = channel.id
                end
            end
        end
        render "api/servers/index"
    end
    
    def create
        @server = Server.new(server_params)
        @server.url = SecureRandom.urlsafe_base64(4)
        if @server.save
            @user_server = UserServer.new({user_id: current_user.id, server_id: @server.id})
            @user_server.save
            @channel = Channel.new({server_id: @server.id, name: "general"})
            @channel.save
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

    def destroy
        @server = Server.find_by(id: params[:id])
        @s = @server
        @server.destroy

        render "api/servers/destroy"
    end
    
    private

    def server_params
        params.require(:server).permit(:owner_id, :name, :url)
    end

end
        