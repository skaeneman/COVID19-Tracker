class RegistrationsController < ApplicationController

  def create
    errors_array = []

    begin
      user = User.create!(
        first_name: params['user']['first_name'],
        last_name: params['user']['last_name'],
        email: params['user']['email'],
        phone: params['user']['phone'],
        password: params['user']['password'],
        password_confirmation: params['user']['password_confirmation']
      )
    rescue ActiveRecord::RecordInvalid => invalid
      # if ActiveRecord generates any errors store them in an array 
      errors_array << invalid.record.errors.full_messages
    end

    # if the user was successfully created
    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { errors: errors_array }
    end
  end
end