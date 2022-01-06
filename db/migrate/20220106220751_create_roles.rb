class CreateRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :roles do |t|
      t.integer :server_id, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :roles, :server_id
    add_index :roles, :name
    add_index :roles, [:server_id, :name], unique: true
  end
end
