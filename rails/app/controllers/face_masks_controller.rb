class FaceMasksController < ApplicationController
  before_action :set_face_mask, only: [:show, :edit, :update, :destroy]

  # # GET /face_masks
  # # GET /face_masks.json
  # def index
  #   @face_masks = FaceMask.all
  # end

  # # GET /face_masks/1
  # # GET /face_masks/1.json
  # def show
  # end

  # # GET /face_masks/new
  # def new
  #   @face_mask = FaceMask.new
  # end

  # # GET /face_masks/1/edit
  # def edit
  # end

  # POST /face_masks
  # POST /face_masks.json
  def create
    @face_mask = FaceMask.new(face_mask_params)

    respond_to do |format|
      if @face_mask.save
        format.html { redirect_to @face_mask, notice: 'Face mask was successfully created.' }
        format.json { render :show, status: :created, location: @face_mask }
      else
        format.html { render :new }
        format.json { render json: @face_mask.errors, status: :unprocessable_entity }
      end
    end
  end

  # # PATCH/PUT /face_masks/1
  # # PATCH/PUT /face_masks/1.json
  # def update
  #   respond_to do |format|
  #     if @face_mask.update(face_mask_params)
  #       format.html { redirect_to @face_mask, notice: 'Face mask was successfully updated.' }
  #       format.json { render :show, status: :ok, location: @face_mask }
  #     else
  #       format.html { render :edit }
  #       format.json { render json: @face_mask.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /face_masks/1
  # # DELETE /face_masks/1.json
  # def destroy
  #   @face_mask.destroy
  #   respond_to do |format|
  #     format.html { redirect_to face_masks_url, notice: 'Face mask was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_face_mask
      @face_mask = FaceMask.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def face_mask_params
      params.require(:face_mask).permit(:mandate_use_for_everyone, :mandate_use_for_employees_of_public_facing_businesses, :state_policy_id)
    end
end
