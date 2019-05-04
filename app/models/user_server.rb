class User_Server < ApplicationRecord

    validates :user_id, :server_id, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
    
end