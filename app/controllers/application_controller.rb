class ApplicationController < ActionController::Base
  # skip because we're using a Rails API 
  skip_before_action :verify_authenticity_token
end
