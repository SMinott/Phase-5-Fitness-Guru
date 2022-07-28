class PlansController < ApplicationController
    before_action :plan_find, except: [:index, :create]
    skip_before_action :authenticate_user, only: [:index]

    def index
        plans = Plan.all
        render json: plans, status: :ok
    end

    def show
        render json: plan_find, serializer: PlanDetailSerializer, status: :ok
    end
    
    #Users should not be able to create a plan, I think.  May hev to remove eventually.
    def create
        plan = Plan.create!(plan_params)
        render json: plan, status: :created
    end

    def update
        plan_find.update!(plan_params)
        render json: plan_find, status: :ok
    end

    def destroy
        plan_find.destroy
        head :no_content
    end

    private


    #Users will be able to edit/enter/change the fee or description, so they're excluded from params.
    def plan_params
        params.permit(:name)
    end

    def plan_find
        Plan.find_by!(id: params[:id])
    end
   
end
