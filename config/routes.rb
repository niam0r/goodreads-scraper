Rails.application.routes.draw do
  devise_for :users
  resources :quotes, only: [:index, :show, :destroy]
  root to: 'pages#index'
  get '/quotes-react', to: 'pages#home'
  get '/quotes-react/:id', to: 'pages#home'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :quotes, only: [ :index, :show ]
    end
  end
end
