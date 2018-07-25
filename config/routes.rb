Rails.application.routes.draw do
  resources :quotes, only: [:index, :show]
  root to: 'pages#home'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :quotes, only: [ :index ]
    end
  end
end
