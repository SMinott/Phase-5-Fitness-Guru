class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :gender, :age, :email, :username, :city, :state, :height, :weight, :fitness_level, :goal1, :goal2, :bio, :profile_image

  has_many :memberships;
  has_many :plans, through: :memberships
 
end
