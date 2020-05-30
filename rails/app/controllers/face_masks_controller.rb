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




  # GET 'face_masks/facemasks_by_state' returns API get request for face mask data
  def facemasks_by_state
    # join the state_policies table and face_masks table
    face_masks = FaceMask.joins("INNER JOIN state_policies ON face_masks.state_policy_id = state_policies.id")
                         .select(["state_policies.id", "state_name", "mandate_use_for_everyone", 
                                 "mandate_use_for_employees_of_public_facing_businesses"])

    mask_not_required = []
    mandate_use_for_everyone = []
    mandate_use_for_employees = []
    not_mandated_for_employees = []

    # sort on face masks (if nil then no policy exists)
    face_masks.each do |mask, index|      
      if mask.mandate_use_for_everyone.nil?
        mask_not_required << mask.state_name
      else
        mandate_use_for_everyone << mask.state_name
      end

      if mask.mandate_use_for_employees_of_public_facing_businesses.nil?  
        not_mandated_for_employees << mask.state_name
      else
        mandate_use_for_employees << mask.state_name
      end
    end

    respond_to do |format|
      if face_masks        
        format.json { render json: { "mask_not_required": mask_not_required, "mandate_use_for_everyone": mandate_use_for_everyone,
          "mandate_use_for_employees": mandate_use_for_employees, "not_mandated_for_employees": not_mandated_for_employees, }}
      else
        format.json { render json: "error: no face mask data available..." }
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
