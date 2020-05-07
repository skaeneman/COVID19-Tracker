if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_covid19-tracker", domain: "placeholder-4-now.herokuapp.com"
else
  Rails.application.config.session_store :cookie_store, key: "_covid19-tracker"
end
