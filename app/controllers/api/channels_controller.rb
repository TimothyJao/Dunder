class Api::ChannelsController < ApplicationController
    def index
        @server = Server.find_by(id: params[:server_id])
        @channels = @server.channels
        render "api/channels/index"
    end
    
    def fetch_dms
        @channels = Channel.where("sender_id = ? OR recipient_id = ?", params[:id], params[:id])
        @sender = []
        @recipient = []
        @channels.each do |channel|
            @sender.push(User.find(channel.sender_id))
            @recipient.push(User.find(channel.recipient_id))
        end
        render "api/channels/dms"
    end


    def create
        @DM = Channel.where("sender_id = ? AND recipient_id = ?", channel_params[:sender_id], channel_params[:recipient_id])
        @DM += Channel.where("recipient_id = ? AND sender_id = ?", channel_params[:sender_id], channel_params[:recipient_id])
        @channel = Channel.where("server_id = ? AND name = ?", channel_params[:server_id], channel_params[:name])
        if !@DM.empty?
            render json: ["You already have a chat with this user"], status: 422
        elsif !@channel.empty?
            render json: ["Channel already exists"], status: 422
        else
            @channel = Channel.new(channel_params)
            if @channel.save
                @sender = (User.find(@channel.sender_id))
                @recipient = (User.find(@channel.recipient_id))
                render "api/channels/dm"
            else
                render json: @channel.errors.full_messages, status: 422
            end
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
        