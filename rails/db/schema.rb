# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_21_014829) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.bigint "state_policies_id", null: false
    t.date "day_cares_closed"
    t.date "nursing_home_visitors_banned"
    t.date "non_essential_businesses_closed"
    t.date "reopen_businesses"
    t.boolean "religious_gatherings_exempt"
    t.boolean "firearm_retailers_open"
    t.boolean "liquor_stores_open"
    t.date "closed_restaurants_except_take_out"
    t.date "reopen_restaurants"
    t.date "closed_gyms"
    t.date "reopened_gyms"
    t.date "closed_movie_theaters"
    t.date "reopened_movie_theaters"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["state_policies_id"], name: "index_businesses_on_state_policies_id"
  end

  create_table "face_masks", force: :cascade do |t|
    t.bigint "state_policies_id", null: false
    t.date "mandate_use_for_everyone"
    t.date "mandate_use_for_employees_of_public_facing_businesses"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["state_policies_id"], name: "index_face_masks_on_state_policies_id"
  end

  create_table "state_policies", force: :cascade do |t|
    t.string "state_name"
    t.date "state_of_emergency"
    t.date "k_12_schools_closed"
    t.date "shelter_in_place_start"
    t.date "shelter_in_place_end"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "businesses", "state_policies", column: "state_policies_id"
  add_foreign_key "face_masks", "state_policies", column: "state_policies_id"
end
