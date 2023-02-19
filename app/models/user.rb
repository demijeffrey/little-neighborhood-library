class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    validates :password, :password_confirmation, presence: true

    has_secure_password

    has_many :reviews
    has_many :books, through: :reviews

end
