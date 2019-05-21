class ChangeTables < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :url
    add_column :servers, :url, :string
  end
end
