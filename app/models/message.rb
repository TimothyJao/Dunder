class Message < ApplicationRecord
    belongs_to :user,
    foreign_key: :sender_id,
    class_name: :User

    belongs_to :parent,
    foreign_key: :parent_id,
    class_name: :Channel
    
end
