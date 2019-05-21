class ChatChannel < ApplicationCable::Channel  

  def subscribed
    parent = Server.find(params[:parent_id])
    stream_for parent
  end

  def speak(data)
    parent = Server.find(params[:parent_id])
    message = Message.new(
      message: data['message'], 
      sender_id: data['sender_id'],
      parent_id: data['parent_id']
    )
    if message.save!
      user = User.find(message.sender_id)
      socket = { message: message, user: {username: user.username}, type:'message' }
      ChatChannel.broadcast_to(parent, socket)
    end
  end

  def load
    parent = Server.find(params[:parent_id])
    messages = Message.where(parent_id: parent.id)
    socket = { messages:messages, type:'messages' }
    ChatChannel.broadcast_to(parent, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
