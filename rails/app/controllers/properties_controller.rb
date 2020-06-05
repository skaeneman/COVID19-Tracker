class PropertiesController < ApplicationController
  before_action :set_property, only: [:show, :edit, :update, :destroy]

  # POST /properties
  # POST /properties.json
  def create
    @property = Property.new(property_params)

    respond_to do |format|
      if @property.save
        format.html { redirect_to @property, notice: 'Property was successfully created.' }
        format.json { render :show, status: :created, location: @property }
      else
        format.html { render :new }
        format.json { render json: @property.errors, status: :unprocessable_entity }
      end
    end
  end

  # GET 'properties/get_evictions'
  # returns API get request about eviction data
  def get_evictions
    # join the state_policies table and properties table and only select the eviction data
    evictions = Property.joins("INNER JOIN state_policies ON properties.state_policy_id = state_policies.id")
                        .select(["state_policies.id", "state_name", "stop_initiating_evictions"])
    
    # evictions = Property.select(["id", "stop_initiating_evictions"]) # just grab 2 columns from the table

    no_eviction_policy = []
    eviction_policy = []

    # sort on evictions vs no policy for evictions (if nil then no policy exists)
    evictions.each do |evict, index|
      if evict.stop_initiating_evictions.nil?
        no_eviction_policy << evict.state_name
      else
        eviction_policy << evict.state_name
      end
    end

    # get counts
    no_eviction_policy_count = no_eviction_policy.size
    eviction_policy_count = eviction_policy.size

    respond_to do |format|
      if evictions        
        # format.json { render json: evictions.to_json(only: %i[stop_initiating_evictions], include: { state_policy: { only: %i[state_name] } }) }
        # format.json { render json: evictions.to_json(only: %i[state_name stop_initiating_evictions])} # leave the id column
        format.json { render json: { "eviction_policy_count": eviction_policy_count, "no_eviction_policy_count": no_eviction_policy_count,
          "eviction_policy": eviction_policy, "no_eviction_policy": no_eviction_policy, }}
      else
        format.json { render json: "error: no eviction data available" }
      end
    end    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_property
      @property = Property.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def property_params
      params.require(:property).permit(:state_policy_id, :stop_initiating_evictions, :stop_enforcing_evictions, :grace_period_or_security_deposit_towards_rent, :froze_utility_shut_offs, :froze_mortgage_payments)
    end
end
