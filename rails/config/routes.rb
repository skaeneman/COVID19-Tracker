Rails.application.routes.draw do
  resources :state_statistics
  resources :unemployment_insurances
  resources :health_cares
  resources :businesses
  resources :face_masks
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  
  get 'state_policies/get_state_policy', to: 'state_policies#get_state_policy', defaults: { format: 'json' }
  # get :states, to: "state_policies#index"
  resources :state_policies, defaults: { format: 'json' }
  
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  get :login, to: "static#login"
  get :signup, to: "static#signup"


  # property data
  get 'properties/get_evictions', to: 'properties#get_evictions', defaults: { format: 'json' }
  resources :properties


  root to: "static#home"
end
