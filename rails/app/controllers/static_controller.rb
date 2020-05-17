class StaticController < ApplicationController  
  
  def home
    render json: { status: "everything is working" }
  end

  def login
    render json: { status: "everything is working" }
  end

end
