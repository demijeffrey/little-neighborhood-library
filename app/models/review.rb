class Review < ApplicationRecord

  validates :comment, :rating, presence: true

  belongs_to :book
  belongs_to :user

end
