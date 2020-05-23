class HealthCaresController < ApplicationController
  before_action :set_health_care, only: [:show, :edit, :update, :destroy]

  # GET /health_cares
  # GET /health_cares.json
  def index
    @health_cares = HealthCare.all
  end

  # GET /health_cares/1
  # GET /health_cares/1.json
  def show
  end

  # GET /health_cares/new
  def new
    @health_care = HealthCare.new
  end

  # GET /health_cares/1/edit
  def edit
  end

  # POST /health_cares
  # POST /health_cares.json
  def create
    @health_care = HealthCare.new(health_care_params)

    respond_to do |format|
      if @health_care.save
        format.html { redirect_to @health_care, notice: 'Health care was successfully created.' }
        format.json { render :show, status: :created, location: @health_care }
      else
        format.html { render :new }
        format.json { render json: @health_care.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /health_cares/1
  # PATCH/PUT /health_cares/1.json
  def update
    respond_to do |format|
      if @health_care.update(health_care_params)
        format.html { redirect_to @health_care, notice: 'Health care was successfully updated.' }
        format.json { render :show, status: :ok, location: @health_care }
      else
        format.html { render :edit }
        format.json { render json: @health_care.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /health_cares/1
  # DELETE /health_cares/1.json
  def destroy
    @health_care.destroy
    respond_to do |format|
      format.html { redirect_to health_cares_url, notice: 'Health care was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_health_care
      @health_care = HealthCare.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def health_care_params
      params.require(:health_care).permit(:state_policy_id, :modify_medicaid_with_1135_waivers, :aca_special_enrollment_period, :audio_only_telehealth, :allow_or_expand_medicaid_telehealth, :suspended_elective_medical, :resumed_elective_medical, :made_efforts_to_limit_abortions, :limit_abortion_details, :medicaid_expansion)
    end
end
