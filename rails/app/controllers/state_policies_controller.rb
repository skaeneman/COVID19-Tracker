class StatePoliciesController < ApplicationController
  before_action :set_state_policy, only: [:edit, :update, :destroy]

  # # GET /state_policies
  # # GET /state_policies.json
  # def index
  #   # @state_policies = StatePolicy.all
  #   Rails.logger.debug("inside index action.....")
  # end

  # GET /state_policies/1
  # GET /state_policies/1.json
  # def show
  # end

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

  # # GET /state_policies/new
  # def new
  #   @state_policy = StatePolicy.new
  # end

  # # GET /state_policies/1/edit
  # def edit
  # end

  # POST /state_policies
  # POST /state_policies.json
  # def create
  #   @state_policy = StatePolicy.new(state_policy_params)

  #   respond_to do |format|
  #     if @state_policy.save
  #       format.json { render :show, status: :created, location: @state_policy }
  #     else
  #       format.json { render json: @state_policy.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # PATCH/PUT /state_policies/1
  # # PATCH/PUT /state_policies/1.json
  # def update
  #   respond_to do |format|
  #     if @state_policy.update(state_policy_params)
  #       format.html { redirect_to @state_policy, notice: 'State policy was successfully updated.' }
  #       format.json { render :show, status: :ok, location: @state_policy }
  #     else
  #       format.html { render :edit }
  #       format.json { render json: @state_policy.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /state_policies/1
  # # DELETE /state_policies/1.json
  # def destroy
  #   @state_policy.destroy
  #   respond_to do |format|
  #     format.html { redirect_to state_policies_url, notice: 'State policy was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

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
