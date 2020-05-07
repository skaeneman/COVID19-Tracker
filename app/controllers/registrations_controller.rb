class RegistrationsController < ApplicationController

  def create
    user = User.create!(
        first_name: params['user']['first_name'],
        last_name: params['user']['last_name'],
        email: params['user']['email'],
        phone: params['user']['phone'],
        password: params['user']['password'],
        password_confirmation: params['user']['password_confirmation']
    )
    # if the user account was successfully registered then create the session
    if user
      session[:user_id] = user.id  

      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: 500 }
    end
  end

  def logged_in
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else 
      render json: { logged_in: false }
    end
  end

  def logout
    reset_session
    render json: { status: 200, logged_out: true }    
  end

end
