Rails.application.routes.draw do

  # get '/hello', to: 'application#hello_world'

  get '/current-user', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
end
