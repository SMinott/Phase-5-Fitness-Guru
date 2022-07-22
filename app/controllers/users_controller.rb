class UsersController < ApplicationController
    before_action :user_find, except: [:index, :create]

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        render json: user_find, status: :ok
    end

    def create
        user = User.create!(user_params)
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
        params.permit(:firstname, :lastname, :gender, :age, :email, :username, :city, :state, :height, :weight, :fitness_level, :goal1, :goal2, :bio, :profile_image )
    end

    def user_find
        User.find_by!(id: params[:id])
    end
end
