class StatePolicy < ApplicationRecord
  has_one :business

  scope :get_state_data, ->(state) { where("state_name =?", state).first }

end
