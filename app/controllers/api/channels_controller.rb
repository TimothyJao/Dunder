class Api::ChannelsController < ApplicationController
    def index
        @server = Server.find_by(id: params[:server_id])
        @channels = @server.channels
        render "api/channels/index"
    end
    
    def fetch_dms
        @channels_sender = Channel.find_by(sender_id: params[:sender_id])
        @channels_recipient = Channel.find_by(recipient_id: params[:recipient_id])
        debugger
        render "api/channels/index"
    end

    def fetch_recipient_dms
        render "api/channels/index"
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render "api/channels/show"
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def show
        @channel = Channel.find_by(id: params[:id])
        if @channel
            render "api/channels/show"
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        @c = @channel
        @channel.destroy

        render "api/channels/destroy"
    end
    
    private

    def channel_params
        params.require(:channel).permit(:name, :server_id, :sender_id, :recipient_id)
    end

end
        