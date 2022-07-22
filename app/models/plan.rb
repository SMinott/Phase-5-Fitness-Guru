class Plan < ApplicationRecord
    has_many :memberships;
    has_many :members, through: :memberships, source: :user

    validates :name, presence: true, uniqueness: true
    validates :description, presence: true
    validates :fee, presence: true
end
