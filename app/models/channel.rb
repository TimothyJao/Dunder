class Channel < ApplicationRecord

    validates :server_id, :name, presence: true

    belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
    
end