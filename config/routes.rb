Rails.application.routes.draw do
  resources :quotes, only: [:index, :show]
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
