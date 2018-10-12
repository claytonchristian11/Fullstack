Rails.application.routes.draw do

   namespace :api, defaults: {format: :json} do
     resources :users, only: [:index, :show, :create]
     resources :songs, only: [:index, :show, :create]
     resource :session, only: [:create, :show, :destroy]
   end

   root "static_pages#root"
end
