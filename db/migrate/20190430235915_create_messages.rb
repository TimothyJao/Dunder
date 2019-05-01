class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.text :message, null: false
      t.integer :channel_id, null:false

      t.timestamps
    end

    add_index :messages, :channel_id
    add_index :messages, :sender_id
  end
end
