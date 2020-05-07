# whitelist certain domains
Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins "http://localhost:3000"
      resource "*", headers: :any, methods: [:get, :put, :post, :patch, :delete, :options, :head], credentials: true
    end

    # update with the domain where the app will be hosted.
    allow do
      origins "https://placeholder-for-now.herokuapp.com"
      resource "*", headers: :any, methods: [:get, :put, :post, :patch, :delete, :options, :head], credentials: true
    end    
end