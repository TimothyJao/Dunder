@channels.each_with_index do |channel, index|
    json.set! channel.id do
        json.extract! channel, :id, :name
        json.set! :sender do 
            json.extract! @sender[index], :username, :id
        end
        json.set! :recipient do
            json.extract! @recipient[index], :username, :id
        end
    end
    
end