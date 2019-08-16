@servers.each_with_index do |server, index|
   json.set! server.id do
       json.extract! server, :id, :url, :name, :owner_id, :general_id
   end
end