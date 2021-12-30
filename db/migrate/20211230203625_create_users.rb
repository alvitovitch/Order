class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :phone_number, limit: 11
      t.string :username, null: false, limit: 32
      t.string :user_avatar, null: false
      t.string :tag, null: false, limit: 5
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token
    add_index :users, [:username, :tag], unique: true, name: 'name_tag'
  end
end
