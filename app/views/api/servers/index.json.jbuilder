@servers.each do |server|
   json.set! server.id do
       json.extract! server, :id, :url, :name, :owner_id
   end
end