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

ActiveRecord::Schema.define(version: 2022_01_06_220751) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.integer "server_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["server_id"], name: "index_categories_on_server_id"
  end

  create_table "channels", force: :cascade do |t|
    t.integer "category_id", null: false
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_channels_on_category_id"
  end

  create_table "memberships", force: :cascade do |t|
    t.integer "server_id", null: false
    t.integer "user_id", null: false
    t.integer "role_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["role_id"], name: "index_memberships_on_role_id"
    t.index ["server_id"], name: "index_memberships_on_server_id"
    t.index ["user_id"], name: "index_memberships_on_user_id"
  end

  create_table "roles", force: :cascade do |t|
    t.integer "server_id", null: false
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_roles_on_name"
    t.index ["server_id", "name"], name: "index_roles_on_server_id_and_name", unique: true
    t.index ["server_id"], name: "index_roles_on_server_id"
  end

  create_table "servers", force: :cascade do |t|
    t.string "server_name", null: false
    t.integer "server_type", null: false
    t.string "server_avatar", null: false
    t.integer "creator_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["creator_id"], name: "index_servers_on_creator_id"
    t.index ["server_name"], name: "index_servers_on_server_name"
    t.index ["server_type"], name: "index_servers_on_server_type"
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
