@servers.each do |server|
   json.set! server.id do
       json.extract! server, :id, :url, :name
   end
end