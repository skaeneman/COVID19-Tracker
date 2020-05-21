class CreateFaceMasks < ActiveRecord::Migration[6.0]
  def change
    create_table :face_masks do |t|
      t.references :state_policies, null: false, foreign_key: true
      t.date :mandate_use_for_everyone
      t.date :mandate_use_for_employees_of_public_facing_businesses

      t.timestamps
    end
  end
end
