Rails.application.routes.draw do

   namespace :api, defaults: {format: :json} do
     resources :users, only: [:index, :show, :create, :update]
     resources :songs, only: [:index, :show, :create, :destroy, :update]
     resource :session, only: [:create, :show, :destroy]
   end

   root "static_pages#root"
end
