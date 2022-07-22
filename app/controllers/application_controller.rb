class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
  
    
    private
  
    def render_not_found(exception)
      render json: {error: "#{exception.model} not found"}, status: :not_found
    end
  
    def render_invalid(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    #Hardcoded to user.first for now.  Will update later.
    #Update will return user that is logged in (authentication)
    
    def current_user
        User.first
    end 
end
