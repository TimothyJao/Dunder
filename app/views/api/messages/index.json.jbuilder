json.array! @chats do |chat|
    json.set! :message do
        json.extract! chat[:message], :id, :message, :parent_id, :sender_id
    end
    json.set! :user do
        json.extract! chat[:user], :id, :username
    end
end