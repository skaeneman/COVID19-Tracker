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
    # state_policy = StatePolicy.find_by(state_name: params[:state]).includes(:test)


    # state_policy = StatePolicy.joins(:test).joins(:face_mask)
    # state_policy.each do |p|
    #   Rails.logger.debug("test..... #{p.test.test_col}")
    # end

    # eager-load (cache) the assocaited tables
    state_policy = StatePolicy.includes(:test).includes(:face_mask)

    # state_policy.each do |p|
    #   Rails.logger.debug("p.cal..... #{p.test.inspect}")
    #   Rails.logger.debug("p.cal..... #{p.face_mask.inspect}")
    # end


    # state_policy = StatePolicy.joins(:test).where(Test.table_name => {state_policy_id: 1})      
    # state_policy = StatePolicy.joins(:test).merge(StatePolicy.where(id: 1))


    # state_policy = StatePolicy.get_state_data(params[:state])

    # state_policy = StatePolicy.includes(:business).find_by(state_name: params[:state])

    Rails.logger.debug("state_policy..... #{state_policy.inspect}")


    # eager_people.map(&:country).map(&:name) 


    # policy_array = []

    # if state_policy
    #   biz = Business.find_by(state_policies_id: state_policy.id)
    # end

    # Rails.logger.debug("biz..... #{biz.inspect}")
    # Rails.logger.debug("state_policy..... #{state_policy.inspect}")

    # policy_array << state_policy 
    # policy_array << biz

    # Rails.logger.debug("policy_array..... #{policy_array.inspect}")

    # render json: @state_policy.as_json(only: %i(id state_name))
    respond_to do |format|
      if state_policy        
        format.json { render json: state_policy.to_json( include: [:test, :face_mask], status: 200 ) }

        # format.json { render :json => state_policy, status: 200 }
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
