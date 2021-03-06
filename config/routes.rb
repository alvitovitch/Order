Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    mount ActionCable.server => '/cable'
    namespace :api, defaults: {format: :json} do
        resources :users do
          resources :friendships
        end
        resources :servers do
          resources :memberships
          resources :categories do
            resources :channels do
              resources :messages
            end
          end
        end
        resource :session, only: [:create, :destroy]

    end

    root "static_pages#root"
end
