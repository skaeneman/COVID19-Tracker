class UnemploymentInsurancesController < ApplicationController
  before_action :set_unemployment_insurance, only: [:show, :edit, :update, :destroy]

  # GET /unemployment_insurances
  # GET /unemployment_insurances.json
  def index
    @unemployment_insurances = UnemploymentInsurance.all
  end

  # GET /unemployment_insurances/1
  # GET /unemployment_insurances/1.json
  def show
  end

  # GET /unemployment_insurances/new
  def new
    @unemployment_insurance = UnemploymentInsurance.new
  end

  # GET /unemployment_insurances/1/edit
  def edit
  end

  # POST /unemployment_insurances
  # POST /unemployment_insurances.json
  def create
    @unemployment_insurance = UnemploymentInsurance.new(unemployment_insurance_params)

    respond_to do |format|
      if @unemployment_insurance.save
        format.html { redirect_to @unemployment_insurance, notice: 'Unemployment insurance was successfully created.' }
        format.json { render :show, status: :created, location: @unemployment_insurance }
      else
        format.html { render :new }
        format.json { render json: @unemployment_insurance.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /unemployment_insurances/1
  # PATCH/PUT /unemployment_insurances/1.json
  def update
    respond_to do |format|
      if @unemployment_insurance.update(unemployment_insurance_params)
        format.html { redirect_to @unemployment_insurance, notice: 'Unemployment insurance was successfully updated.' }
        format.json { render :show, status: :ok, location: @unemployment_insurance }
      else
        format.html { render :edit }
        format.json { render json: @unemployment_insurance.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /unemployment_insurances/1
  # DELETE /unemployment_insurances/1.json
  def destroy
    @unemployment_insurance.destroy
    respond_to do |format|
      format.html { redirect_to unemployment_insurances_url, notice: 'Unemployment insurance was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_unemployment_insurance
      @unemployment_insurance = UnemploymentInsurance.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def unemployment_insurance_params
      params.require(:unemployment_insurance).permit(:user_policy_id, :no_ui_waiting_period, :waived_ui_waiting_period, :waived_work_search_for_ui, :expand_ui_to_quarantined_people, :expand_ui_for_lost_childcare_or_school_closures, :extended_time_for_people_on_ui, :paid_sick_leave)
    end
end
