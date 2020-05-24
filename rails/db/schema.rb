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

ActiveRecord::Schema.define(version: 2020_05_24_182738) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.bigint "state_policy_id", null: false
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
    t.index ["state_policy_id"], name: "index_businesses_on_state_policy_id"
  end

  create_table "face_masks", force: :cascade do |t|
    t.date "mandate_use_for_everyone"
    t.date "mandate_use_for_employees_of_public_facing_businesses"
    t.bigint "state_policy_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["state_policy_id"], name: "index_face_masks_on_state_policy_id"
  end

  create_table "health_cares", force: :cascade do |t|
    t.bigint "state_policy_id", null: false
    t.date "modify_medicaid_with_1135_waivers"
    t.date "aca_special_enrollment_period"
    t.date "audio_only_telehealth"
    t.date "allow_or_expand_medicaid_telehealth"
    t.date "suspended_elective_medical"
    t.date "resumed_elective_medical"
    t.boolean "made_efforts_to_limit_abortions"
    t.text "limit_abortion_details"
    t.boolean "medicaid_expansion"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["state_policy_id"], name: "index_health_cares_on_state_policy_id"
  end

  create_table "properties", force: :cascade do |t|
    t.bigint "state_policy_id", null: false
    t.date "stop_initiating_evictions"
    t.date "stop_enforcing_evictions"
    t.date "grace_period_or_security_deposit_towards_rent"
    t.date "froze_utility_shut_offs"
    t.date "froze_mortgage_payments"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["state_policy_id"], name: "index_properties_on_state_policy_id"
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

  create_table "state_statistics", force: :cascade do |t|
    t.bigint "state_policy_id", null: false
    t.float "population_density_per_square_mile"
    t.integer "population_2018"
    t.integer "square_miles"
    t.integer "homeless_population"
    t.float "percent_unemployed_2018"
    t.float "percent_living_below_fed_poverty_line_2018"
    t.float "percent_at_risk_of_covid"
    t.float "all_causes_of_death_2018"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["state_policy_id"], name: "index_state_statistics_on_state_policy_id"
  end

  create_table "unemployment_insurances", force: :cascade do |t|
    t.bigint "state_policy_id", null: false
    t.boolean "no_ui_waiting_period"
    t.date "waived_ui_waiting_period"
    t.boolean "waived_work_search_for_ui", default: false
    t.boolean "expand_ui_to_quarantined_people", default: false
    t.boolean "expand_ui_for_lost_childcare_or_school_closures", default: false
    t.boolean "extended_time_for_people_on_ui", default: false
    t.boolean "paid_sick_leave", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["state_policy_id"], name: "index_unemployment_insurances_on_state_policy_id"
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

  add_foreign_key "businesses", "state_policies"
  add_foreign_key "face_masks", "state_policies"
  add_foreign_key "health_cares", "state_policies"
  add_foreign_key "properties", "state_policies"
  add_foreign_key "state_statistics", "state_policies"
  add_foreign_key "unemployment_insurances", "state_policies"
end
