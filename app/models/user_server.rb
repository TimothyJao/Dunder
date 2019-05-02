class User < ApplicationRecord

    validates :owner_id, :server_id, presence: true

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

    belongs_to :server,
    foreign_key: :user_servers,
    class_name: :Server
    
end