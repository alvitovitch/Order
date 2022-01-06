class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :name, null: false
      t.integer :server_id, null: false
      t.timestamps
    end
    add_index :categories, :server_id
  end
end
