class Api::MessagesController < ApplicationController
    def index
        @messages = Message.where(parent_id: params[:parent_id])

        @chats = @messages.map do |message| 
            user = User.find(message.sender_id)
            {message: message, user: user}
        end

        render "api/messages/index"
    end
end
