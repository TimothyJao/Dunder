class Server < ApplicationRecord

    validates :owner_id, :name, :url, presence: true

    has_many :user_server,
    dependent: :destroy,
    foreign_key: :server_id,
    class_name: :UserServer

    has_many :users,
    through: :user_server,
    source: :user
  
    has_many :channels,
    dependent: :destroy,
    foreign_key: :server_id,
    class_name: :Channel

end
        