class Channel < ApplicationRecord

    validates :name, presence: true

    belongs_to :server,
    optional: true,
    foreign_key: :server_id,
    class_name: :Server

    has_many :messages,
    foreign_key: :parent_id,
    class_name: :Message
    
end