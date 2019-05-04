class Server < ApplicationRecord

    validates :owner_id, :name, presence: true

    has_many :user_server,
    foreign_key: :server_id,
    class_name: :User_Server
  
end
        