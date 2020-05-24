class StateStatisticsController < ApplicationController
  before_action :set_state_statistic, only: [:show, :edit, :update, :destroy]

  # GET /state_statistics
  # GET /state_statistics.json
  def index
    @state_statistics = StateStatistic.all
  end

  # GET /state_statistics/1
  # GET /state_statistics/1.json
  def show
  end

  # GET /state_statistics/new
  def new
    @state_statistic = StateStatistic.new
  end

  # GET /state_statistics/1/edit
  def edit
  end

  # POST /state_statistics
  # POST /state_statistics.json
  def create
    @state_statistic = StateStatistic.new(state_statistic_params)

    respond_to do |format|
      if @state_statistic.save
        format.html { redirect_to @state_statistic, notice: 'State statistic was successfully created.' }
        format.json { render :show, status: :created, location: @state_statistic }
      else
        format.html { render :new }
        format.json { render json: @state_statistic.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /state_statistics/1
  # PATCH/PUT /state_statistics/1.json
  def update
    respond_to do |format|
      if @state_statistic.update(state_statistic_params)
        format.html { redirect_to @state_statistic, notice: 'State statistic was successfully updated.' }
        format.json { render :show, status: :ok, location: @state_statistic }
      else
        format.html { render :edit }
        format.json { render json: @state_statistic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /state_statistics/1
  # DELETE /state_statistics/1.json
  def destroy
    @state_statistic.destroy
    respond_to do |format|
      format.html { redirect_to state_statistics_url, notice: 'State statistic was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_state_statistic
      @state_statistic = StateStatistic.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def state_statistic_params
      params.require(:state_statistic).permit(:state_policy_id, :population_density_per_square_mile, :population_2018, :square_miles, :homeless_population, :percent_unemployed_2018, :percent_living_below_fed_poverty_line_2018, :percent_at_risk_of_covid, :all_causes_of_death_2018)
    end
end
