class StaticController < ApplicationController  
  def home
    render json: { status: "everything is working" }
  end
end
