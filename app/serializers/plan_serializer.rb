class PlanSerializer < ActiveModel::Serializer
  #Should I remove :fee from attributes?
  #Don't want user to be able to edit this for each plan.
  #Ans: No I removed it from the plan_params in controller.
  #Leaving it here means they will be able to see it, not chnage it.

  attributes :id, :name, :description, :fee, :membership

  # has_many :memberships;
  # has_one :membership
  # has_many :users, through: :memberships

  def membership
    current_user.memberships.find_by(plan_id: object.id)
  end

end
