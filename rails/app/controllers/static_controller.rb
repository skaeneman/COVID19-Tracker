class StaticController < ApplicationController  
  
  def home
    render json: { status: "everything is working" }
  end

  def login
    render json: { status: "login..." }
  end

  def signup
    render json: { status: "signup..." }
  end

end
