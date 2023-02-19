class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :rating, :comment, :user, :book

  has_one :book
  has_one :user

end
