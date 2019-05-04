class Api::ServersController < ApplicationController
    def index
        @servers = current_user.servers
    end
    
    def create
        @server = Server.new(server_params)
        if @server.save
            render "api/servers/show"
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def show
        @server = Server.find_by(params[:server][:owner_id])
        if @server
            render "api/servers/show"
        end
    end
    
    private

    def server_params
        params.require(:server).permit(:owner_id, :name)
    end

end
        