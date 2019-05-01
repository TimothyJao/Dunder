class CreateServers < ActiveRecord::Migration[5.1]
  def change
    create_table :servers do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false

      t.timestamps
    end
    add_index :servers, :owner_id
    add_index :servers, :name
  end
end
