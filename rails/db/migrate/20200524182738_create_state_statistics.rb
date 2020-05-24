class CreateStateStatistics < ActiveRecord::Migration[6.0]
  def change
    create_table :state_statistics do |t|
      t.references :state_policy, null: false, foreign_key: true
      t.float :population_density_per_square_mile
      t.integer :population_2018
      t.integer :square_miles
      t.integer :homeless_population
      t.float :percent_unemployed_2018
      t.float :percent_living_below_fed_poverty_line_2018
      t.float :percent_at_risk_of_covid
      t.float :all_causes_of_death_2018

      t.timestamps
    end
  end
end
