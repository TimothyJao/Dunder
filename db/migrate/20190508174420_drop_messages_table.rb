class DropMessagesTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :messages
  end
end
