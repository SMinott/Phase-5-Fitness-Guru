class UsersController < ApplicationController
    before_action :user_find, except: [:index, :create, :show]
    skip_before_action :authenticate_user, only: [:index, :create]

    def index
        users = User.all
        render json: users, status: :ok
    end

    #GET/me
    def show
        # render json: user_find, status: :ok
        if current_user
            render json: current_user, status: :ok
        else
            render json: { errors: "No active session" }, status: :unauthorized
        end
    end

    #POST/signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        user_find.update!(user_params)
        render json: user_find, status: :ok
    end

    def destroy
        user_find.destroy
        head :no_content
    end

    private

    def user_params
        # params.permit(:firstname, :lastname, :gender, :age, :email, :username, :city, :state, :height, :weight, :fitness_level, :goal1, :goal2, :bio, :profile_image )
        params.permit(:username, :password, :password_confirmation)
    end

    def user_find
        User.find_by!(id: params[:id])
    end
end
