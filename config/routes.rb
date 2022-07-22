Rails.application.routes.draw do
  resources :memberships, only: [:index, :create, :destroy]
  resources :plans
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

#Returns currently logged in user 0r 401 unauthorized if none exists.
#Determines whether the Authenticate or Unauthenticated is loaded
  get "/me", to: "users#show"
  #Returns a newly created & logged in user
  post "/signup", to: "users#create"
  #Returns a newly logged in user
  post "/login", to: "sessions#create"
  #Removes the user_id from the session cookie
  delete "/logout", to: "sessions#destroy" 

end
