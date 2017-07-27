Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :songs, only: [:show, :index]
    resources :albums, only: [:show, :index]
    resources :artists, only: [:show, :index]
    resources :playlists, only: [:show, :index, :create, :destroy, :update]
    resources :playlist_songs, only: [:show, :index, :create, :destroy]
  end

  root to: 'static_pages#root'
end
