class CreateHealthCares < ActiveRecord::Migration[6.0]
  def change
    create_table :health_cares do |t|
      t.references :state_policy, null: false, foreign_key: true
      t.date :modify_medicaid_with_1135_waivers
      t.date :aca_special_enrollment_period
      t.date :audio_only_telehealth
      t.date :allow_or_expand_medicaid_telehealth
      t.date :suspended_elective_medical
      t.date :resumed_elective_medical
      t.boolean :made_efforts_to_limit_abortions
      t.text :limit_abortion_details
      t.boolean :medicaid_expansion

      t.timestamps
    end
  end
end
