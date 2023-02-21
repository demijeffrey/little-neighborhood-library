Rails.application.routes.draw do

  resources :reviews, only: [:create, :index]
  resources :books, only:[:create, :index, :show]

  get '/current-user', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/books', to: 'books#index'
  get '/book/:title', to: 'books#show'
  
end
