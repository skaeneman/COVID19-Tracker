class StatePoliciesController < ApplicationController
  before_action :set_state_policy, only: [:edit, :update, :destroy]

  def get_state_policy
    # lookup state then eager-load (cache) the associated tables
    state_policy = StatePolicy.includes(:business)
                              .includes(:face_mask)
                              .includes(:property)
                              .includes(:health_care)
                              .includes(:unemployment_insurance)
                              .includes(:state_statistic)
                              .find_by(state_name: params[:state])

    # state_policy = StatePolicy.get_state_data(params[:state])
    # state_policy = StatePolicy.includes(:business).find_by(state_name: params[:state])

    Rails.logger.debug("state_policy..... #{state_policy.inspect}")

    respond_to do |format|
      if state_policy        
        format.json { render json: state_policy.to_json( include: [:business, :face_mask, :property, 
          :health_care, :unemployment_insurance, :state_statistic], status: 200 ) }
      else
        format.json { render json: "No data available for #{params[:state]}" }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_state_policy
      @state_policy = StatePolicy.find(params[:id])
    end

  #   # Only allow a list of trusted parameters through.
  #   def state_policy_params
  #     params.fetch(:state_policy, {})
  #   end
end
