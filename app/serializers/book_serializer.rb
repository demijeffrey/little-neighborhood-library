class BookSerializer < ActiveModel::Serializer

  attributes :id, :title, :author, :genre, :description, :available, :image_url, :reviews

  has_many :reviews
  has_many :users, through: :reviews

end
