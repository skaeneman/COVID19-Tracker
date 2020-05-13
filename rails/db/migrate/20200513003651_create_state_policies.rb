class CreateStatePolicies < ActiveRecord::Migration[6.0]
  def change
    create_table :state_policies do |t|
      t.string :state_name
      t.date :state_of_emergency
      t.date :k_12_schools_closed
      t.date :shelter_in_place_start
      t.date :shelter_in_place_end

      t.timestamps
    end
  end
end
