class CreateProperties < ActiveRecord::Migration[6.0]
  def change
    create_table :properties do |t|
      t.references :state_policy, null: false, foreign_key: true
      t.date :stop_initiating_evictions
      t.date :stop_enforcing_evictions
      t.date :grace_period_or_security_deposit_towards_rent
      t.date :froze_utility_shut_offs
      t.date :froze_mortgage_payments

      t.timestamps
    end
  end
end
