class CreateUnemploymentInsurances < ActiveRecord::Migration[6.0]
  def change
    create_table :unemployment_insurances do |t|
      t.references :state_policy, null: false, foreign_key: true
      t.boolean :no_ui_waiting_period
      t.date :waived_ui_waiting_period
      t.boolean :waived_work_search_for_ui, default: false
      t.boolean :expand_ui_to_quarantined_people, default: false
      t.boolean :expand_ui_for_lost_childcare_or_school_closures, default: false
      t.boolean :extended_time_for_people_on_ui, default: false
      t.boolean :paid_sick_leave, default: false

      t.timestamps
    end
  end
end
