class Server < ApplicationRecord

    validates :owner_id, :name, :url, presence: true

    has_many :user_server,
    foreign_key: :server_id,
    class_name: :UserServer
  
end
        