class Business < ApplicationRecord
  belongs_to :state_policy, optional: true
end
