Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  
  get 'state_policies/get_state_policy', to: 'state_policies#get_state_policy', defaults: { format: 'json' }
  resources :state_policies, defaults: { format: 'json' }
  
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  get :login, to: "static#login"
  root to: "static#home"
end
