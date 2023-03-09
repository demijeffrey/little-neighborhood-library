Rails.application.routes.draw do

  resources :reviews, only: [:create, :index, :destroy, :update]
  resources :books

  get '/current-user', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  patch '/books/:id', to: 'books#update'
  delete '/books/:id', to: 'books#destroy'

  delete '/reviews', to: 'reviews#destroy'
  patch '/reviews', to: 'reviews#update'
  
end
