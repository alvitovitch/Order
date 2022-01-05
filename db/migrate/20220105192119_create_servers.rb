class CreateServers < ActiveRecord::Migration[6.1]
  def change
    create_table :servers do |t|
        t.string :server_name, null: false
        t.integer :type, null: false
        t.string :server_avatar, null: false
        t.intger :creator_id, null: false

      t.timestamps

      add_index :servers, :server_name
      add_index :servers, :type
      add_index :servers, :creator_id
    end
  end
end
