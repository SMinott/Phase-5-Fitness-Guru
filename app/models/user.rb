class User < ApplicationRecord

    #dependent: :destroy means that if you delete a user the corresponsing membership will also be deleted.
    #This way, we dont have existing memeberships w/ no attached user.
    #Determines what to do with a dependent (membership) if the parent(user) is deleted.
    #Nullify is another method; oposite of method below
    #Onle parents (user & plan) would have these dependencies.
    has_many :memberships, dependent: :destroy

    has_many :plans, through: :memberships

    #This is a built-in macro for authenticate, password & password_confirmation
    has_secure_password

    # validates :firstname, presence: true
    # validates :lastname, presence: true
    # validates :gender, presence: true
    # validates :age, presence: true
    validates :email, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true
    # validates :city, presence: true
    # validates :state, presence: true
    # validates :height, presence: true
    # validates :weight, presence: true
    # validates :fitness_level, presence: true
    # validates :goal1, presence: true

   
end
