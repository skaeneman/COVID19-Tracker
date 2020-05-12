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

    # if the user was successfully created
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
end