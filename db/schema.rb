# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_05_192119) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "servers", force: :cascade do |t|
    t.string "server_name", null: false
    t.integer "type", null: false
    t.string "server_avatar", null: false
    t.integer "creator_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["creator_id"], name: "index_servers_on_creator_id"
    t.index ["server_name"], name: "index_servers_on_server_name"
    t.index ["type"], name: "index_servers_on_type"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "phone_number", limit: 11
    t.string "username", limit: 32, null: false
    t.string "user_avatar", null: false
    t.string "tag", limit: 5, null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username", "tag"], name: "name_tag", unique: true
  end

end
