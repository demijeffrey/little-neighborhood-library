class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :password_digest, :books

  has_many :reviews
  has_many :books, through: :reviews
  
end
