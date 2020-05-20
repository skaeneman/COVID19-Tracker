class CreateBusinesses < ActiveRecord::Migration[6.0]
  def change
    create_table :businesses do |t|
      t.references :state_policies, null: false, foreign_key: true
      t.date :day_cares_closed
      t.date :nursing_home_visitors_banned
      t.date :non_essential_businesses_closed
      t.date :reopen_businesses
      t.boolean :religious_gatherings_exempt
      t.boolean :firearm_retailers_open
      t.boolean :liquor_stores_open
      t.date :closed_restaurants_except_take_out
      t.date :reopen_restaurants
      t.date :closed_gyms
      t.date :reopened_gyms
      t.date :closed_movie_theaters
      t.date :reopened_movie_theaters

      t.timestamps
    end
  end
end
