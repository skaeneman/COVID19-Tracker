class FaceMask < ApplicationRecord
  belongs_to :state_policies, optional: true
end
