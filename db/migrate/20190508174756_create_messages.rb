class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :sender_id 
      t.integer :parent_id
      t.text :message

      t.timestamps
    end
  end
end
