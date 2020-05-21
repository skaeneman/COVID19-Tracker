class CreateTests < ActiveRecord::Migration[6.0]
  def change
    create_table :tests do |t|
      t.references :state_policy, null: false, foreign_key: true
      t.string :test_col

      t.timestamps
    end
  end
end
