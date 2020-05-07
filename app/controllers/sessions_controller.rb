class SessionsController < ApplicationController
  
  def create
    # try to find the user via the form params then authenticate them
    user = User.find_by(email: params["user"]["email"])
               .try(:authenticate, params["user"]["password"])

    # if the user was found then set the session id
    if user
        session[:user_id] = user.id

        render json: {
            status: :created,
            logged_in: true,
            user: user
        }
    else
        # if the user account was not found render '401 unauthorized'
        render json: { status: 401 }
    end
  end
  
end
