class StatePolicy < ApplicationRecord
  has_one :business
  has_one :face_mask
  has_one :property
  
  # doesn't pull back the business table
  # scope :get_state_data, ->(state) { self.joins('LEFT JOIN businesses ON businesses.state_policies_id = state_policies.id').where("state_policies.state_name =?", state).limit(1) }

  # this scope is working to pull back all data
  # scope :get_state_data, ->(state) { Business.joins('INNER JOIN state_policies ON state_policies.id = businesses.state_policies_id').where("state_policies.state_name IN (?)", state).limit(1) }
end
