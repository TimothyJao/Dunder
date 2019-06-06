class DropUsersChannelsTable < ActiveRecord::Migration[5.1]
  def up
    drop_table :user_channels
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
