class CreateMemberships < ActiveRecord::Migration[6.1]
  def change
    create_table :memberships do |t|
      t.integer :server_id, null: false
      t.integer :user_id, null: false
      t.integer :role_id, null: false
      t.timestamps
    end
    add_index :memberships, :user_id
    add_index :memberships, :role_id
    add_index :memberships, :server_id
  end
end
