class AddGeneralToServers < ActiveRecord::Migration[5.1]
  def change
    add_column :servers, :general_id, :integer
  end
end
