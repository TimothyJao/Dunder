class AddIdsToChannels < ActiveRecord::Migration[5.1]
  def change
    add_column :channels, :sender_id, :integer
    add_column :channels, :recipient_id, :integer
  end
end
