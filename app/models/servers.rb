class Server < ApplicationRecord

    validates :owner_id, :name, presence: true
  
end
        