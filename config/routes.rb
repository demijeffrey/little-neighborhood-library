Rails.application.routes.draw do

  resources :reviews, only: [:create, :index, :destroy, :update]
  resources :books, only:[:create, :index, :show]

  get '/current-user', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/books', to: 'books#index'
  get '/book/:title', to: 'books#show'

  delete '/reviews', to: 'reviews#destroy'
  patch '/reviews', to: 'reviews#update'
  
end
