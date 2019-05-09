@users_servers.each do |user_server|
   json.set! user_server.id do
       json.extract! user_server, :id, :user_id, :server_id
   end
end