class MembershipsController < ApplicationController
    before_action :membership_find, except: [:index, :create]

    def index
        memberships = Membership.all
        render json: memberships, status: :ok
    end

    # def show
    #     render json: membership_find, status: :ok
    # end

    def create
        membership = current_user.memberships.create!(membership_params)
        render json: membership, status: :created
    end

    # def update
    #     membership_find.update!(membership_params)
    #     render json: membership_find, status: :ok
    # end

    def destroy
        membership_find.destroy
        head :no_content
    end

    private

    #User will not be able to cahnge/enter the user_id (will be dependent on current_user)
    #So will not include the user_id in params.
    def membership_params
        params.permit( :plan_id )
    end

    def membership_find
        Membership.find_by!(id: params[:id])
    end
end
