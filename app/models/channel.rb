class Channel < ApplicationRecord

    validates :name, presence: true

    belongs_to :server,
    optional: true,
    foreign_key: :server_id,
    class_name: :Server
    
end