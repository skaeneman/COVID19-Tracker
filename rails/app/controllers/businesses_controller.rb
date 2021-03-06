class BusinessesController < ApplicationController
  before_action :set_business, only: [:show, :edit, :update, :destroy]

  # POST /businesses
  # POST /businesses.json
  def create
    @business = Business.new(business_params)

    respond_to do |format|
      if @business.save
        format.html { redirect_to @business, notice: 'Business was successfully created.' }
        format.json { render :show, status: :created, location: @business }
      else
        format.html { render :new }
        format.json { render json: @business.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_business
      @business = Business.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def business_params
      params.require(:business).permit(:state_policy_id, :day_cares_closed, :nursing_home_visitors_banned, :non_essential_businesses_closed, :reopen_businesses, :religious_gatherings_exempt, :firearm_retailers_open, :liquor_stores_open, :closed_restaurants_except_take_out, :reopen_restaurants, :closed_gyms, :reopened_gyms, :closed_movie_theaters, :reopened_movie_theaters)
    end
end
