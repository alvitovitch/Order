class CreateChannels < ActiveRecord::Migration[6.1]
  def change
    create_table :channels do |t|
      t.integer :category_id, null: false
      t.string :name, null: false
      t.timestamps
    end
  add_index :channels, :category_id
  end
end
