class StatePolicy < ApplicationRecord
  has_one :business

  # scope :get_state_data, ->(state) { where("state_name =?", state).joins(:business).where('state_policies = ?', 1).limit(1) }


  # doesn't pull back teh biz table
  # scope :get_state_data, ->(state) { self.joins('LEFT JOIN businesses ON businesses.state_policies_id = state_policies.id').where("state_policies.state_name IN (?)", state).limit(1) }

  # this scope is working to pull back all data
  scope :get_state_data, ->(state) { Business.joins('LEFT JOIN state_policies ON state_policies.id = businesses.state_policies_id').where("state_policies.state_name IN (?)", state).limit(1) }


# working SQL Query
# select shelter_in_place_start, state_name, closed_movie_theaters
# from state_policies s
# left join businesses b
# on s.id = b.state_policies_id
# where state_name LIKE 'Massachusetts'


end
