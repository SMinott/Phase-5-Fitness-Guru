class Membership < ApplicationRecord
  belongs_to :user
  belongs_to :plan


  #Based on the scope of the user_id, 
  #this user can only have 1 plan_id.
  #That is, a user with membership can only have one plan. 
  validates :plan_id, uniqueness: {scope: [:user_id], 
    message: "You are already subscribed to a plan. 
    Please contact customer service at 800-800-1234 for 
    plan adjustments"
  }
end
