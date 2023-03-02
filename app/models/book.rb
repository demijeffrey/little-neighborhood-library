class Book < ApplicationRecord

    validates :image_url, :description, :title, :author, presence: true

    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

end
