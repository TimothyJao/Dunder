json.set! :channel do
    json.extract! @channel, :id, :name
    json.set! :sender do 
        json.extract! @sender, :username, :id
    end
    json.set! :recipient do
        json.extract! @recipient, :username, :id
    end
end