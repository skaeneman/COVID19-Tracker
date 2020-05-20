class Business < ApplicationRecord
  belongs_to :state_policies, optional: true
end
